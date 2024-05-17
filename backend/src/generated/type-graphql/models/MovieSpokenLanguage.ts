import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { MovieSpokenLanguageCount } from "../resolvers/outputs/MovieSpokenLanguageCount";

@TypeGraphQL.ObjectType("MovieSpokenLanguage", {})
export class MovieSpokenLanguage {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  language!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  movies?: Movie[];

  @TypeGraphQL.Field((_type) => MovieSpokenLanguageCount, {
    nullable: true,
  })
  _count?: MovieSpokenLanguageCount | null;
}
