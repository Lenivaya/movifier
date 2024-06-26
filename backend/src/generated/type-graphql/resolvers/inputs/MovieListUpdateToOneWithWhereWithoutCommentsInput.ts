import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListUpdateWithoutCommentsInput } from "../inputs/MovieListUpdateWithoutCommentsInput";
import { MovieListWhereInput } from "../inputs/MovieListWhereInput";

@TypeGraphQL.InputType("MovieListUpdateToOneWithWhereWithoutCommentsInput", {})
export class MovieListUpdateToOneWithWhereWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MovieListWhereInput, {
    nullable: true
  })
  where?: MovieListWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateWithoutCommentsInput, {
    nullable: false
  })
  data!: MovieListUpdateWithoutCommentsInput;
}
