import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput";
import { MovifierAppUserCreateWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserCreateWithoutMovieListsCommentsInput";
import { MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput";
import { MovifierAppUserUpsertWithoutMovieListsCommentsInput } from "../inputs/MovifierAppUserUpsertWithoutMovieListsCommentsInput";
import { MovifierAppUserWhereUniqueInput } from "../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput", {})
export class MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput {
  @TypeGraphQL.Field(_type => MovifierAppUserCreateWithoutMovieListsCommentsInput, {
    nullable: true
  })
  create?: MovifierAppUserCreateWithoutMovieListsCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput, {
    nullable: true
  })
  connectOrCreate?: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpsertWithoutMovieListsCommentsInput, {
    nullable: true
  })
  upsert?: MovifierAppUserUpsertWithoutMovieListsCommentsInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput, {
    nullable: true
  })
  update?: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput | undefined;
}
