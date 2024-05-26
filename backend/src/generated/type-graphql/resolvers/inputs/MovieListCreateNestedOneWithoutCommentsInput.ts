import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutCommentsInput } from "../inputs/MovieListCreateOrConnectWithoutCommentsInput";
import { MovieListCreateWithoutCommentsInput } from "../inputs/MovieListCreateWithoutCommentsInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCreateNestedOneWithoutCommentsInput", {})
export class MovieListCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;
}
