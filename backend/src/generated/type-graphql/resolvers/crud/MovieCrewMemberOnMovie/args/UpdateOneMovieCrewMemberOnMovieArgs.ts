import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieUpdateInput } from "../../../inputs/MovieCrewMemberOnMovieUpdateInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../../../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateInput, {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieUpdateInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;
}
