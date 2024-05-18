import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserOrderByRelevanceFieldEnum } from "../../enums/MovifierAppUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovifierAppUserOrderByRelevanceInput", {})
export class MovifierAppUserOrderByRelevanceInput {
  @TypeGraphQL.Field((_type) => [MovifierAppUserOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "email" | "username" | "password" | "name">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
