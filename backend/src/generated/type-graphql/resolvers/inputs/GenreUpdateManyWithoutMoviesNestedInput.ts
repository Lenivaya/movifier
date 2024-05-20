import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutMoviesInput } from "../inputs/GenreCreateOrConnectWithoutMoviesInput";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutMoviesInput } from "../inputs/GenreUpdateManyWithWhereWithoutMoviesInput";
import { GenreUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutMoviesInput";
import { GenreUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateManyWithoutMoviesNestedInput", {})
export class GenreUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: GenreCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  set?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  delete?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: GenreUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenreScalarWhereInput[] | undefined;
}
