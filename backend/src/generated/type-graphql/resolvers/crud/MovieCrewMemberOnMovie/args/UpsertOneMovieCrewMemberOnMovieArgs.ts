import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieCreateInput } from "../../../inputs/MovieCrewMemberOnMovieCreateInput";
import { MovieCrewMemberOnMovieUpdateInput } from "../../../inputs/MovieCrewMemberOnMovieUpdateInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../../../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberOnMovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieCreateInput, {
    nullable: false,
  })
  create!: MovieCrewMemberOnMovieCreateInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberOnMovieUpdateInput, {
    nullable: false,
  })
  update!: MovieCrewMemberOnMovieUpdateInput;
}
