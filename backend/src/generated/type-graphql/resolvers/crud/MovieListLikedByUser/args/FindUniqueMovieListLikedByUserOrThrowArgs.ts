import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserWhereUniqueInput } from "../../../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieListLikedByUserOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListLikedByUserWhereUniqueInput;
}
