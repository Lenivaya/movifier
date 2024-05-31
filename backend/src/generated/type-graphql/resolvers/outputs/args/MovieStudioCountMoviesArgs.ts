import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWhereInput } from "../../inputs/MovieWhereInput";

@TypeGraphQL.ArgsType()
export class MovieStudioCountMoviesArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
