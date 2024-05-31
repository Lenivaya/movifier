import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserCreateInput } from "../../../inputs/MovieListLikedByUserCreateInput";
import { MovieListLikedByUserUpdateInput } from "../../../inputs/MovieListLikedByUserUpdateInput";
import { MovieListLikedByUserWhereUniqueInput } from "../../../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateInput, {
    nullable: false
  })
  create!: MovieListLikedByUserCreateInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateInput, {
    nullable: false
  })
  update!: MovieListLikedByUserUpdateInput;
}
