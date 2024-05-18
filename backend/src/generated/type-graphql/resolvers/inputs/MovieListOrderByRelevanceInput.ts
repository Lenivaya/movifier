import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListOrderByRelevanceFieldEnum } from "../../enums/MovieListOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieListOrderByRelevanceInput", {})
export class MovieListOrderByRelevanceInput {
  @TypeGraphQL.Field((_type) => [MovieListOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "name" | "userId">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
