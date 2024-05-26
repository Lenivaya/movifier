import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutRatedByInput } from "../inputs/MovieCreateOrConnectWithoutRatedByInput";
import { MovieCreateWithoutRatedByInput } from "../inputs/MovieCreateWithoutRatedByInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutRatedByInput", {})
export class MovieCreateNestedOneWithoutRatedByInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutRatedByInput, {
    nullable: true
  })
  create?: MovieCreateWithoutRatedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutRatedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutRatedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
