import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserCreateWithoutLikedMovieReviewsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput", {})
export class MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovifierAppUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  create!: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
}
