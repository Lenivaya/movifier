import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutLikedByInput } from "../inputs/MovieCreateOrConnectWithoutLikedByInput";
import { MovieCreateWithoutLikedByInput } from "../inputs/MovieCreateWithoutLikedByInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutLikedByInput", {})
export class MovieCreateNestedOneWithoutLikedByInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutLikedByInput, {
    nullable: true
  })
  create?: MovieCreateWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutLikedByInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
