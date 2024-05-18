import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieReviewOrderByWithRelationAndSearchRelevanceInput";
import { MovieReviewWhereInput } from "../../../inputs/MovieReviewWhereInput";
import { MovieReviewWhereUniqueInput } from "../../../inputs/MovieReviewWhereUniqueInput";
import { MovieReviewScalarFieldEnum } from "../../../../enums/MovieReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieReviewArgs {
  @TypeGraphQL.Field((_type) => MovieReviewWhereInput, {
    nullable: true,
  })
  where?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieReviewOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: MovieReviewOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieReviewWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieReviewScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "createdAt" | "updatedAt" | "content" | "ratingId">
    | undefined;
}
