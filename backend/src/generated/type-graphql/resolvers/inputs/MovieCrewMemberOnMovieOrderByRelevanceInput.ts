import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieOrderByRelevanceFieldEnum } from "../../enums/MovieCrewMemberOnMovieOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieOrderByRelevanceInput", {})
export class MovieCrewMemberOnMovieOrderByRelevanceInput {
  @TypeGraphQL.Field(
    (_type) => [MovieCrewMemberOnMovieOrderByRelevanceFieldEnum],
    {
      nullable: false,
    },
  )
  fields!: Array<"movieId" | "movieCrewMemberId" | "movieCrewMemberTypeId">;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  search!: string;
}
