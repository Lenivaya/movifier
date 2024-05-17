import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListUpdateManyMutationInput } from "../../../inputs/MovieListUpdateManyMutationInput";
import { MovieListWhereInput } from "../../../inputs/MovieListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieListArgs {
  @TypeGraphQL.Field((_type) => MovieListUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieListUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MovieListWhereInput, {
    nullable: true,
  })
  where?: MovieListWhereInput | undefined;
}
