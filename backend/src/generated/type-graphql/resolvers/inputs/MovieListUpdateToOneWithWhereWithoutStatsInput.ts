import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutStatsInput } from "../inputs/MovieListUpdateWithoutStatsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpdateToOneWithWhereWithoutStatsInput", {})
export class MovieListUpdateToOneWithWhereWithoutStatsInput {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutStatsInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutStatsInput;
}
