import * as TypeGraphQL from 'type-graphql'
import { Resolver } from 'type-graphql'
import { UserRegisterOutput } from '@/graphql/users/outputs/userRegisterOutput'
import { GraphQLError, GraphQLResolveInfo } from 'graphql/index'
import {
  CreateOneMovifierAppUserArgs,
  MovifierAppUser
} from '@/generated/type-graphql'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import jwt, { SignOptions } from 'jsonwebtoken'
import { UserLoginOutput } from '@/graphql/users/outputs/userLoginOutput'
import { UserLoginArgs } from '@/graphql/users/args/userLoginArgs'
import { AppContext } from '@/graphql/context'
import { app } from '@/app'
import { create } from 'mutative'
import { PasswordHasher } from '@/services/passwordHasher'

const JWT_OPTIONS: SignOptions = {
  issuer: 'movifier.org',
  algorithm: 'HS256'
}

@Resolver()
export class CustomUserResolver {
  @TypeGraphQL.Query((_returns) => MovifierAppUser, { nullable: true })
  async me(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<MovifierAppUser | null> {
    if (!ctx.jwt) return null

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movifierAppUser.findUniqueOrThrow({
      where: {
        id: ctx.jwt.userId
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }

  @TypeGraphQL.Mutation((_returns) => UserRegisterOutput, {
    nullable: false
  })
  async createOneMovifierAppUser(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => CreateOneMovifierAppUserArgs)
    args: CreateOneMovifierAppUserArgs
  ): Promise<UserRegisterOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    const passwordHash = await PasswordHasher.hashPassword(args.data.password)
    const user = await getPrismaFromContext(ctx).movifierAppUser.create({
      ...create({ ...args }, (draft) => {
        draft.data.password = passwordHash
      }),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    if (!user) throw new GraphQLError('User was not created.')

    const token = jwt.sign(
      { userId: user.id, userRole: user.role },
      app.config.JWT_SECRET,
      JWT_OPTIONS
    )

    return { user, token }
  }

  @TypeGraphQL.Mutation((_returns) => UserLoginOutput, {
    nullable: false
  })
  async loginUser(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args((_type) => UserLoginArgs) args: UserLoginArgs
  ) {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const user = await getPrismaFromContext(ctx).movifierAppUser.findUnique({
      where: {
        email: args.data.email
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
    if (!user) throw new GraphQLError('User not found.')

    const isPasswordCorrect = await PasswordHasher.comparePassword(
      args.data.password,
      user.password
    )
    if (!isPasswordCorrect) throw new GraphQLError('User not found.')

    const token = jwt.sign(
      { userId: user.id, userRole: user.role },
      app.config.JWT_SECRET,
      JWT_OPTIONS
    )

    return { user, token }
  }
}
