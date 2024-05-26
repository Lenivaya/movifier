import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserOrderByRelevanceFieldEnum } from "../../enums/MovieReviewLikedByUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewLikedByUserOrderByRelevanceInput", {})
export class MovieReviewLikedByUserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"userId" | "movieReviewId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
