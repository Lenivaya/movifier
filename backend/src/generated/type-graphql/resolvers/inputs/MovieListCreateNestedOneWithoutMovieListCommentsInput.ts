import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutMovieListCommentsInput } from "../inputs/MovieListCreateOrConnectWithoutMovieListCommentsInput";
import { MovieListCreateWithoutMovieListCommentsInput } from "../inputs/MovieListCreateWithoutMovieListCommentsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCreateNestedOneWithoutMovieListCommentsInput",
  {},
)
export class MovieListCreateNestedOneWithoutMovieListCommentsInput {
  @TypeGraphQL.Field((_type) => MovieListCreateWithoutMovieListCommentsInput, {
    nullable: true,
  })
  create?: MovieListCreateWithoutMovieListCommentsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListCreateOrConnectWithoutMovieListCommentsInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieListCreateOrConnectWithoutMovieListCommentsInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieListWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieListWhereUniqueInput | undefined;
}
