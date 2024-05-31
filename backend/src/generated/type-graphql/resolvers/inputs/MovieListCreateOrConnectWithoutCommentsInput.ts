import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutCommentsInput } from "../inputs/MovieListCreateWithoutCommentsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateOrConnectWithoutCommentsInput", {})
export class MovieListCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: false
  })
  where!: MovieListWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutCommentsInput;
}
