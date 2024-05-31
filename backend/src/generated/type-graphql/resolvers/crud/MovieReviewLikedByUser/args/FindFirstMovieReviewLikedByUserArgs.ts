import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput";
import { MovieReviewLikedByUserWhereInput } from "../../../inputs/MovieReviewLikedByUserWhereInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../../../inputs/MovieReviewLikedByUserWhereUniqueInput";
import { MovieReviewLikedByUserScalarFieldEnum } from "../../../../enums/MovieReviewLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMovieReviewLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieReviewLikedByUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"createdAt" | "userId" | "movieReviewId"> | undefined;
}
