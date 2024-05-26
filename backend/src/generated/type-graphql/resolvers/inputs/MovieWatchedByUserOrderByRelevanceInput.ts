import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserOrderByRelevanceFieldEnum } from "../../enums/MovieWatchedByUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieWatchedByUserOrderByRelevanceInput", {})
export class MovieWatchedByUserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"userId" | "movieId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
