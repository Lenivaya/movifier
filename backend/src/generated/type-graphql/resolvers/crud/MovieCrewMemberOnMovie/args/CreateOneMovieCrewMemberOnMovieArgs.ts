import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieCreateInput } from "../../../inputs/MovieCrewMemberOnMovieCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateInput, {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieCreateInput;
}
