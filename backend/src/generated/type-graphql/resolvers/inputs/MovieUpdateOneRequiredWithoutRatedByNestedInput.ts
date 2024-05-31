import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutRatedByInput } from "../inputs/MovieCreateOrConnectWithoutRatedByInput";
import { MovieCreateWithoutRatedByInput } from "../inputs/MovieCreateWithoutRatedByInput";
import { MovieUpdateToOneWithWhereWithoutRatedByInput } from "../inputs/MovieUpdateToOneWithWhereWithoutRatedByInput";
import { MovieUpsertWithoutRatedByInput } from "../inputs/MovieUpsertWithoutRatedByInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutRatedByNestedInput", {})
export class MovieUpdateOneRequiredWithoutRatedByNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutRatedByInput, {
    nullable: true
  })
  create?: MovieCreateWithoutRatedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutRatedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutRatedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutRatedByInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutRatedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutRatedByInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutRatedByInput | undefined;
}
