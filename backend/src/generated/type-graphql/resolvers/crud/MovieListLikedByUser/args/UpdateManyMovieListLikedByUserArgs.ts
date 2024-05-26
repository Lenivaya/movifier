import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserUpdateManyMutationInput } from "../../../inputs/MovieListLikedByUserUpdateManyMutationInput";
import { MovieListLikedByUserWhereInput } from "../../../inputs/MovieListLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieListLikedByUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieListLikedByUserWhereInput | undefined;
}
