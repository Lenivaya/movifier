import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserOrderByWithRelationInput } from "../../../inputs/MovifierAppUserOrderByWithRelationInput";
import { MovifierAppUserWhereInput } from "../../../inputs/MovifierAppUserWhereInput";
import { MovifierAppUserWhereUniqueInput } from "../../../inputs/MovifierAppUserWhereUniqueInput";
import { MovifierAppUserScalarFieldEnum } from "../../../../enums/MovifierAppUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovifierAppUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "email"
        | "username"
        | "password_hash"
        | "name"
        | "role"
      >
    | undefined;
}
