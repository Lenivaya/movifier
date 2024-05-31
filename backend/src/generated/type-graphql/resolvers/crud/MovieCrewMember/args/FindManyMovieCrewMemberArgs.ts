import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput";
import { MovieCrewMemberWhereInput } from "../../../inputs/MovieCrewMemberWhereInput";
import { MovieCrewMemberWhereUniqueInput } from "../../../inputs/MovieCrewMemberWhereUniqueInput";
import { MovieCrewMemberScalarFieldEnum } from "../../../../enums/MovieCrewMemberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieCrewMemberArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieCrewMemberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "photoUrl" | "description" | "imdbId"> | undefined;
}
