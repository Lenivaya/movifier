import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutLikedByInput } from "../inputs/MovieCreateOrConnectWithoutLikedByInput";
import { MovieCreateWithoutLikedByInput } from "../inputs/MovieCreateWithoutLikedByInput";
import { MovieUpdateToOneWithWhereWithoutLikedByInput } from "../inputs/MovieUpdateToOneWithWhereWithoutLikedByInput";
import { MovieUpsertWithoutLikedByInput } from "../inputs/MovieUpsertWithoutLikedByInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutLikedByNestedInput", {})
export class MovieUpdateOneRequiredWithoutLikedByNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutLikedByInput, {
    nullable: true
  })
  create?: MovieCreateWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutLikedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutLikedByInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutLikedByInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutLikedByInput | undefined;
}
