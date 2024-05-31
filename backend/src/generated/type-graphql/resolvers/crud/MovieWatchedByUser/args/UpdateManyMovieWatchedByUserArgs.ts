import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserUpdateManyMutationInput } from "../../../inputs/MovieWatchedByUserUpdateManyMutationInput";
import { MovieWatchedByUserWhereInput } from "../../../inputs/MovieWatchedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieWatchedByUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  where?: MovieWatchedByUserWhereInput | undefined;
}
