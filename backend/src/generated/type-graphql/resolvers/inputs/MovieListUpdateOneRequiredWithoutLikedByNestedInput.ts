import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutLikedByInput } from "../inputs/MovieListCreateOrConnectWithoutLikedByInput";
import { MovieListCreateWithoutLikedByInput } from "../inputs/MovieListCreateWithoutLikedByInput";
import { MovieListUpdateToOneWithWhereWithoutLikedByInput } from "../inputs/MovieListUpdateToOneWithWhereWithoutLikedByInput";
import { MovieListUpsertWithoutLikedByInput } from "../inputs/MovieListUpsertWithoutLikedByInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateOneRequiredWithoutLikedByNestedInput", {})
export class MovieListUpdateOneRequiredWithoutLikedByNestedInput {
  @TypeGraphQL.Field(_type => MovieListCreateWithoutLikedByInput, {
    nullable: true
  })
  create?: MovieListCreateWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateOrConnectWithoutLikedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpsertWithoutLikedByInput, {
    nullable: true
  })
  upsert?: MovieListUpsertWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieListWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieListUpdateToOneWithWhereWithoutLikedByInput, {
    nullable: true
  })
  update?: MovieListUpdateToOneWithWhereWithoutLikedByInput | undefined;
}
