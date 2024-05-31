import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentOrderByRelevanceFieldEnum } from "../../enums/MovieListCommentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListCommentOrderByRelevanceInput", {})
export class MovieListCommentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieListCommentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "content" | "movieListId" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
