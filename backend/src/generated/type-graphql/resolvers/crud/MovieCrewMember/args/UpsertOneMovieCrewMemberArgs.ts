import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberCreateInput } from "../../../inputs/MovieCrewMemberCreateInput";
import { MovieCrewMemberUpdateInput } from "../../../inputs/MovieCrewMemberUpdateInput";
import { MovieCrewMemberWhereUniqueInput } from "../../../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieCrewMemberArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberCreateInput, {
    nullable: false,
  })
  create!: MovieCrewMemberCreateInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateInput, {
    nullable: false,
  })
  update!: MovieCrewMemberUpdateInput;
}
