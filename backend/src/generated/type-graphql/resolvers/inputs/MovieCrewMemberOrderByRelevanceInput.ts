import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOrderByRelevanceFieldEnum } from "../../enums/MovieCrewMemberOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOrderByRelevanceInput", {})
export class MovieCrewMemberOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name" | "photoUrl" | "description" | "imdbId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
