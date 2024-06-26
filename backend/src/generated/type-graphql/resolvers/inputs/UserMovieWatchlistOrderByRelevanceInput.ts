import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { UserMovieWatchlistOrderByRelevanceFieldEnum } from "../../enums/UserMovieWatchlistOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("UserMovieWatchlistOrderByRelevanceInput", {})
export class UserMovieWatchlistOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistOrderByRelevanceFieldEnum], {
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
