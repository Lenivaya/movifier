import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserScalarWhereInput } from "../inputs/MovieLikedByUserScalarWhereInput";
import { MovieLikedByUserUpdateManyMutationInput } from "../inputs/MovieLikedByUserUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateManyWithWhereWithoutMovieInput", {})
export class MovieLikedByUserUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserScalarWhereInput, {
    nullable: false
  })
  where!: MovieLikedByUserScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieLikedByUserUpdateManyMutationInput;
}
