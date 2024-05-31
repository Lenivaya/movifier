import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeCreateInput } from "../../../inputs/MovieCrewMemberTypeCreateInput";
import { MovieCrewMemberTypeUpdateInput } from "../../../inputs/MovieCrewMemberTypeUpdateInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../../../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeCreateInput, {
    nullable: false
  })
  create!: MovieCrewMemberTypeCreateInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateInput, {
    nullable: false
  })
  update!: MovieCrewMemberTypeUpdateInput;
}
