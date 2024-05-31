import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoWhereUniqueInput } from "../../../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieInfoArgs {
  @TypeGraphQL.Field(_type => MovieInfoWhereUniqueInput, {
    nullable: false
  })
  where!: MovieInfoWhereUniqueInput;
}
