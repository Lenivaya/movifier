import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutMovieInfoInput } from "../inputs/MovieCreateNestedOneWithoutMovieInfoInput";
import { MovieInfoCreatealternativeTitlesInput } from "../inputs/MovieInfoCreatealternativeTitlesInput";

@TypeGraphQL.InputType("MovieInfoCreateInput", {})
export class MovieInfoCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  imdbId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  description!: string;

  @TypeGraphQL.Field((_type) => MovieInfoCreatealternativeTitlesInput, {
    nullable: true,
  })
  alternativeTitles?: MovieInfoCreatealternativeTitlesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  durationInMinutes!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  posterUrl!: string;

  @TypeGraphQL.Field((_type) => MovieCreateNestedOneWithoutMovieInfoInput, {
    nullable: false,
  })
  movie!: MovieCreateNestedOneWithoutMovieInfoInput;
}
