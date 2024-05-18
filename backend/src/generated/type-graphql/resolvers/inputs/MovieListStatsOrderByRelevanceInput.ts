import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListStatsOrderByRelevanceFieldEnum } from "../../enums/MovieListStatsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListStatsOrderByRelevanceInput", {})
export class MovieListStatsOrderByRelevanceInput {
  @TypeGraphQL.Field((_type) => [MovieListStatsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "movieListId">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
