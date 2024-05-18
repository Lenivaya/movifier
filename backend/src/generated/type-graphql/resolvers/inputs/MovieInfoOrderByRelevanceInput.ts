import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoOrderByRelevanceFieldEnum } from "../../enums/MovieInfoOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieInfoOrderByRelevanceInput", {})
export class MovieInfoOrderByRelevanceInput {
  @TypeGraphQL.Field((_type) => [MovieInfoOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<
    | "id"
    | "imdbId"
    | "title"
    | "description"
    | "alternativeTitles"
    | "posterUrl"
    | "movieId"
  >;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
