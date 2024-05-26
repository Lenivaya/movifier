import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutStatsInput } from "../inputs/MovieListCreateWithoutStatsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateOrConnectWithoutStatsInput", {})
export class MovieListCreateOrConnectWithoutStatsInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutStatsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutStatsInput;
}
