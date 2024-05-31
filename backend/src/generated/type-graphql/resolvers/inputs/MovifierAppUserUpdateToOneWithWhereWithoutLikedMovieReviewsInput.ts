import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserUpdateWithoutLikedMovieReviewsInput } from "../inputs/MovifierAppUserUpdateWithoutLikedMovieReviewsInput";
import { MovifierAppUserWhereInput } from "../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput", {})
export class MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
}
