import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserScalarWhereInput } from "../inputs/MovieListLikedByUserScalarWhereInput";
import { MovieListLikedByUserUpdateManyMutationInput } from "../inputs/MovieListLikedByUserUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateManyWithWhereWithoutUserInput", {})
export class MovieListLikedByUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieListLikedByUserScalarWhereInput, {
    nullable: false
  })
  where!: MovieListLikedByUserScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListLikedByUserUpdateManyMutationInput;
}
