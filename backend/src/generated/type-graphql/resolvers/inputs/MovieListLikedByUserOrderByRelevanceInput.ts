import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserOrderByRelevanceFieldEnum } from "../../enums/MovieListLikedByUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListLikedByUserOrderByRelevanceInput", {})
export class MovieListLikedByUserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"userId" | "movieListId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
