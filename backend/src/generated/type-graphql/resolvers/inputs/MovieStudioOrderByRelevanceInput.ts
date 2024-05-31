import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioOrderByRelevanceFieldEnum } from "../../enums/MovieStudioOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieStudioOrderByRelevanceInput", {})
export class MovieStudioOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieStudioOrderByRelevanceFieldEnum], {
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
