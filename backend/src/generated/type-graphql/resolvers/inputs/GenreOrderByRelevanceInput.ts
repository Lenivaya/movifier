import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreOrderByRelevanceFieldEnum } from "../../enums/GenreOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenreOrderByRelevanceInput", {})
export class GenreOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [GenreOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
