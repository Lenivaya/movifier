import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageOrderByRelevanceFieldEnum } from "../../enums/MovieSpokenLanguageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieSpokenLanguageOrderByRelevanceInput", {})
export class MovieSpokenLanguageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "language"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
