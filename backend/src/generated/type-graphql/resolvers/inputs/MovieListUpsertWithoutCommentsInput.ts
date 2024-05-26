import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateWithoutCommentsInput } from "../inputs/MovieListCreateWithoutCommentsInput";
import { MovieListUpdateWithoutCommentsInput } from "../inputs/MovieListUpdateWithoutCommentsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpsertWithoutCommentsInput", {})
export class MovieListUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MovieListUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: MovieListUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => MovieListCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: MovieListCreateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;
}
