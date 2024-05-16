import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeUpdateInput } from "../../../inputs/MovieCrewMemberTypeUpdateInput";
import { MovieCrewMemberTypeWhereUniqueInput } from "../../../inputs/MovieCrewMemberTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeUpdateInput, {
    nullable: false,
  })
  data!: MovieCrewMemberTypeUpdateInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieCrewMemberTypeWhereUniqueInput;
}
