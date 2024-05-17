import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutMoviesInput } from "../inputs/MovieListCreateOrConnectWithoutMoviesInput";
import { MovieListCreateWithoutMoviesInput } from "../inputs/MovieListCreateWithoutMoviesInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateNestedManyWithoutMoviesInput", {})
export class MovieListCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => [MovieListCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: MovieListCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCreateOrConnectWithoutMoviesInput], {
    nullable: true,
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieListWhereUniqueInput[] | undefined;
}
