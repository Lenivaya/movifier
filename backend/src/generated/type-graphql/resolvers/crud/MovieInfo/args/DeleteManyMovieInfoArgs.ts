import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoWhereInput } from "../../../inputs/MovieInfoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieInfoArgs {
  @TypeGraphQL.Field(_type => MovieInfoWhereInput, {
    nullable: true
  })
  where?: MovieInfoWhereInput | undefined;
}
