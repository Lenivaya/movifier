import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateOrConnectWithoutMoviesInput } from "../inputs/MovieListCreateOrConnectWithoutMoviesInput";
import { MovieListCreateWithoutMoviesInput } from "../inputs/MovieListCreateWithoutMoviesInput";
import { MovieListScalarWhereInput } from "../inputs/MovieListScalarWhereInput";
import { MovieListUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieListUpdateManyWithWhereWithoutMoviesInput";
import { MovieListUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieListUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieListUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieListUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateManyWithoutMoviesNestedInput", {})
export class MovieListUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field((_type) => [MovieListCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: MovieListCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListCreateOrConnectWithoutMoviesInput], {
    nullable: true,
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieListUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?: MovieListUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?: MovieListUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieListScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieListScalarWhereInput[] | undefined;
}
