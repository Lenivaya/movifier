import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutWatchedByInput } from "../inputs/MovieCreateOrConnectWithoutWatchedByInput";
import { MovieCreateWithoutWatchedByInput } from "../inputs/MovieCreateWithoutWatchedByInput";
import { MovieUpdateToOneWithWhereWithoutWatchedByInput } from "../inputs/MovieUpdateToOneWithWhereWithoutWatchedByInput";
import { MovieUpsertWithoutWatchedByInput } from "../inputs/MovieUpsertWithoutWatchedByInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutWatchedByNestedInput", {})
export class MovieUpdateOneRequiredWithoutWatchedByNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutWatchedByInput, {
    nullable: true
  })
  create?: MovieCreateWithoutWatchedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutWatchedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutWatchedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutWatchedByInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutWatchedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutWatchedByInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutWatchedByInput | undefined;
}
