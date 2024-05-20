import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberUpdateInput } from "../../../inputs/MovieCrewMemberUpdateInput";
import { MovieCrewMemberWhereUniqueInput } from "../../../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieCrewMemberArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberUpdateInput, {
    nullable: false
  })
  data!: MovieCrewMemberUpdateInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberWhereUniqueInput, {
    nullable: false
  })
  where!: MovieCrewMemberWhereUniqueInput;
}
