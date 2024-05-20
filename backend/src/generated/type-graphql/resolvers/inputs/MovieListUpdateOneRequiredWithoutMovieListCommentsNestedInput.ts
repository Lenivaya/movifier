import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutMovieListCommentsInput } from "../inputs/MovieListCreateOrConnectWithoutMovieListCommentsInput";
import { MovieListCreateWithoutMovieListCommentsInput } from "../inputs/MovieListCreateWithoutMovieListCommentsInput";
import { MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput } from "../inputs/MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput";
import { MovieListUpsertWithoutMovieListCommentsInput } from "../inputs/MovieListUpsertWithoutMovieListCommentsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput", {})
export class MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutMovieListCommentsInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutMovieListCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutMovieListCommentsInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutMovieListCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpsertWithoutMovieListCommentsInput, {
    nullable: true
  })
  upsert?: MovieListUpsertWithoutMovieListCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput, {
    nullable: true
  })
  update?: MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput | undefined;
}
