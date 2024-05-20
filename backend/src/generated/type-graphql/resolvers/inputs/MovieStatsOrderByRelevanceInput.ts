import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStatsOrderByRelevanceFieldEnum } from "../../enums/MovieStatsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieStatsOrderByRelevanceInput", {})
export class MovieStatsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieStatsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "movieId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
