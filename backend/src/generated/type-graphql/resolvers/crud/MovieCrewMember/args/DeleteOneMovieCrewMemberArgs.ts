import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberWhereUniqueInput } from "../../../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovieCrewMemberArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberWhereUniqueInput;
}
