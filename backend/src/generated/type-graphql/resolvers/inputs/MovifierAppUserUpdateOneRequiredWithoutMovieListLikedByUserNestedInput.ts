import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput";
import { MovifierAppUserCreateWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserCreateWithoutMovieListLikedByUserInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput";
import { MovifierAppUserUpsertWithoutMovieListLikedByUserInput } from "../inputs/MovifierAppUserUpsertWithoutMovieListLikedByUserInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListLikedByUserInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutMovieListLikedByUserInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutMovieListLikedByUserInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutMovieListLikedByUserInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput | undefined;
}
