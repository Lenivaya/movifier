import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCreateOrConnectWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateOrConnectWithoutMoviesInput";
import { MovieSpokenLanguageCreateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateWithoutMoviesInput";
import { MovieSpokenLanguageScalarWhereInput } from "../inputs/MovieSpokenLanguageScalarWhereInput";
import { MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput";
import { MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.InputType("MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput", {})
export class MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: MovieSpokenLanguageCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereUniqueInput], {
    nullable: true
  })
  set?: MovieSpokenLanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieSpokenLanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieSpokenLanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieSpokenLanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieSpokenLanguageScalarWhereInput[] | undefined;
}
