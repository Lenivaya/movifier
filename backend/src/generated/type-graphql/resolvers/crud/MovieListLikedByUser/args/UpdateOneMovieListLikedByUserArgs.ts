import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserUpdateInput } from "../../../inputs/MovieListLikedByUserUpdateInput";
import { MovieListLikedByUserWhereUniqueInput } from "../../../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateInput, {
    nullable: false
  })
  data!: MovieListLikedByUserUpdateInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;
}
