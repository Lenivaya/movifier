import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserUpdateWithoutUserInput } from "../inputs/MovieLikedByUserUpdateWithoutUserInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput", {})
export class MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieLikedByUserUpdateWithoutUserInput;
}
