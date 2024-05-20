import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioUpdateInput } from "../../../inputs/MovieStudioUpdateInput";
import { MovieStudioWhereUniqueInput } from "../../../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieStudioArgs {
  @TypeGraphQL.Field(_type => MovieStudioUpdateInput, {
    nullable: false
  })
  data!: MovieStudioUpdateInput;

  @TypeGraphQL.Field(_type => MovieStudioWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStudioWhereUniqueInput;
}
