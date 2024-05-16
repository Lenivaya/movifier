import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "./Movie";
import { MovieKeywordCategoryCount } from "../resolvers/outputs/MovieKeywordCategoryCount";

@TypeGraphQL.ObjectType("MovieKeywordCategory", {})
export class MovieKeywordCategory {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  movies?: Movie[];

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryCount, {
    nullable: true,
  })
  _count?: MovieKeywordCategoryCount | null;
}
