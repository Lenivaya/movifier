import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserOrderByRelevanceFieldEnum } from "../../enums/MovieLikedByUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieLikedByUserOrderByRelevanceInput", {})
export class MovieLikedByUserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserOrderByRelevanceFieldEnum], {
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
