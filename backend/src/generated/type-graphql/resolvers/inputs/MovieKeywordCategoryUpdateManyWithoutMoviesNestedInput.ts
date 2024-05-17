import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCreateOrConnectWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateOrConnectWithoutMoviesInput";
import { MovieKeywordCategoryCreateWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateWithoutMoviesInput";
import { MovieKeywordCategoryScalarWhereInput } from "../inputs/MovieKeywordCategoryScalarWhereInput";
import { MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput";
import { MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../inputs/MovieKeywordCategoryWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput",
  {},
)
export class MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryCreateWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  create?: MovieKeywordCategoryCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryCreateOrConnectWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieKeywordCategoryCreateOrConnectWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?:
    | MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieKeywordCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieKeywordCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieKeywordCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieKeywordCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?:
    | MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieKeywordCategoryScalarWhereInput[] | undefined;
}
