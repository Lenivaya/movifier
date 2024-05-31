import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewOrderByRelevanceFieldEnum } from "../../enums/MovieReviewOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewOrderByRelevanceInput", {})
export class MovieReviewOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieReviewOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "content" | "ratingId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
