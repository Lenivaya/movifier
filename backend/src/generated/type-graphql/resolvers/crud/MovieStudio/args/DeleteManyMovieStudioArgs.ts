import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioWhereInput } from "../../../inputs/MovieStudioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieStudioArgs {
  @TypeGraphQL.Field((_type) => MovieStudioWhereInput, {
    nullable: true,
  })
  where?: MovieStudioWhereInput | undefined;
}
