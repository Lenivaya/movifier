import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingOrderByRelevanceFieldEnum } from "../../enums/MovieRatingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieRatingOrderByRelevanceInput", {})
export class MovieRatingOrderByRelevanceInput {
  @TypeGraphQL.Field((_type) => [MovieRatingOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "movieId" | "userId">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
