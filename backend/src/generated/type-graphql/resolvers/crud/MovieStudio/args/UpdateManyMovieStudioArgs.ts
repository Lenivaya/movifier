import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioUpdateManyMutationInput } from "../../../inputs/MovieStudioUpdateManyMutationInput";
import { MovieStudioWhereInput } from "../../../inputs/MovieStudioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieStudioArgs {
  @TypeGraphQL.Field(_type => MovieStudioUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieStudioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieStudioWhereInput, {
    nullable: true
  })
  where?: MovieStudioWhereInput | undefined;
}
