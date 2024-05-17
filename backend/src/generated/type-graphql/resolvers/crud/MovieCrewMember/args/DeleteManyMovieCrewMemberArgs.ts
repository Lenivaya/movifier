import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberWhereInput } from "../../../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieCrewMemberArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberWhereInput | undefined;
}
