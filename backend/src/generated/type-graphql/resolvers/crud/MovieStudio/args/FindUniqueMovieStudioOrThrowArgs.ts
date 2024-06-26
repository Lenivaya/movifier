import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioWhereUniqueInput } from "../../../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieStudioOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieStudioWhereUniqueInput, {
    nullable: false
  })
  where!: MovieStudioWhereUniqueInput;
}
