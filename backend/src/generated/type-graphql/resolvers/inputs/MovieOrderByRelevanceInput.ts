import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByRelevanceFieldEnum } from "../../enums/MovieOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByRelevanceInput", {})
export class MovieOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "id"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
