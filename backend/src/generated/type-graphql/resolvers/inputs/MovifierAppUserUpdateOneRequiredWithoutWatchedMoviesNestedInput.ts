import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput";
import { MovifierAppUserCreateWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserCreateWithoutWatchedMoviesInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput";
import { MovifierAppUserUpsertWithoutWatchedMoviesInput } from "../inputs/MovifierAppUserUpsertWithoutWatchedMoviesInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutWatchedMoviesInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutWatchedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutWatchedMoviesInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutWatchedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput | undefined;
}
