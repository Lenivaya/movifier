import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoCreateWithoutMovieInput } from "../inputs/MovieInfoCreateWithoutMovieInput";
import { MovieInfoWhereUniqueInput } from "../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.InputType("MovieInfoCreateOrConnectWithoutMovieInput", {})
export class MovieInfoCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieInfoWhereUniqueInput, {
    nullable: false
  })
  where!: MovieInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieInfoCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieInfoCreateWithoutMovieInput;
}
