import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberCreateInput } from "../../../inputs/MovieCrewMemberCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieCrewMemberArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberCreateInput, {
    nullable: false
  })
  data!: MovieCrewMemberCreateInput;
}
