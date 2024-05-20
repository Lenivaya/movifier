import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeCreateInput } from "../../../inputs/MovieCrewMemberTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateInput, {
    nullable: false
  })
  data!: MovieCrewMemberTypeCreateInput;
}
