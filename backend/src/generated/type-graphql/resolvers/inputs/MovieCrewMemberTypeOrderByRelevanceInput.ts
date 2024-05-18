import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeOrderByRelevanceFieldEnum } from "../../enums/MovieCrewMemberTypeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberTypeOrderByRelevanceInput", {})
export class MovieCrewMemberTypeOrderByRelevanceInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberTypeOrderByRelevanceFieldEnum],
    {
      nullable: false,
    },
  )
  fields!: Array<"id" | "name">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
