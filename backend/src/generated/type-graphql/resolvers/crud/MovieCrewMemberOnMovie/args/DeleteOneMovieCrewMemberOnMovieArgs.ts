import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../../../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;
}
