import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioCreateInput } from "../../../inputs/MovieStudioCreateInput";
import { MovieStudioUpdateInput } from "../../../inputs/MovieStudioUpdateInput";
import { MovieStudioWhereUniqueInput } from "../../../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieStudioArgs {
  @TypeGraphQL.Field(_type => MovieStudioWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStudioWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieStudioCreateInput, {
    nullable: false
  })
  create!: MovieStudioCreateInput;

  @TypeGraphQL.Field(_type => MovieStudioUpdateInput, {
    nullable: false
  })
  update!: MovieStudioUpdateInput;
}
