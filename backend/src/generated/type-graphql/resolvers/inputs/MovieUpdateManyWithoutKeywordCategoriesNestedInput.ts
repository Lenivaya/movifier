import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutKeywordCategoriesInput } from "../inputs/MovieCreateOrConnectWithoutKeywordCategoriesInput";
import { MovieCreateWithoutKeywordCategoriesInput } from "../inputs/MovieCreateWithoutKeywordCategoriesInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutKeywordCategoriesInput } from "../inputs/MovieUpdateManyWithWhereWithoutKeywordCategoriesInput";
import { MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput";
import { MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutKeywordCategoriesNestedInput", {})
export class MovieUpdateManyWithoutKeywordCategoriesNestedInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutKeywordCategoriesInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutKeywordCategoriesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCreateOrConnectWithoutKeywordCategoriesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCreateOrConnectWithoutKeywordCategoriesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput],
    {
      nullable: true,
    },
  )
  update?:
    | MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieUpdateManyWithWhereWithoutKeywordCategoriesInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieUpdateManyWithWhereWithoutKeywordCategoriesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
