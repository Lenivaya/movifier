import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeWhereInput } from "../../../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;
}
