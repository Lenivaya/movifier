import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoCreateOrConnectWithoutMovieInput } from "../inputs/MovieInfoCreateOrConnectWithoutMovieInput";
import { MovieInfoCreateWithoutMovieInput } from "../inputs/MovieInfoCreateWithoutMovieInput";
import { MovieInfoUpdateToOneWithWhereWithoutMovieInput } from "../inputs/MovieInfoUpdateToOneWithWhereWithoutMovieInput";
import { MovieInfoUpsertWithoutMovieInput } from "../inputs/MovieInfoUpsertWithoutMovieInput";
import { MovieInfoWhereInput } from "../inputs/MovieInfoWhereInput";
import { MovieInfoWhereUniqueInput } from "../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.InputType("MovieInfoUpdateOneWithoutMovieNestedInput", {})
export class MovieInfoUpdateOneWithoutMovieNestedInput {
  @TypeGraphQL.Field((_type) => MovieInfoCreateWithoutMovieInput, {
    nullable: true,
  })
  create?: MovieInfoCreateWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoCreateOrConnectWithoutMovieInput, {
    nullable: true,
  })
  connectOrCreate?: MovieInfoCreateOrConnectWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoUpsertWithoutMovieInput, {
    nullable: true,
  })
  upsert?: MovieInfoUpsertWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  disconnect?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoWhereInput, {
    nullable: true,
  })
  delete?: MovieInfoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoWhereUniqueInput, {
    nullable: true,
  })
  connect?: MovieInfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieInfoUpdateToOneWithWhereWithoutMovieInput,
    {
      nullable: true,
    },
  )
  update?: MovieInfoUpdateToOneWithWhereWithoutMovieInput | undefined;
}
