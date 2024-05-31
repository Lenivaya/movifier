import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateManyMovieListAuthorInputEnvelope } from "../inputs/MovieListCreateManyMovieListAuthorInputEnvelope";
import { MovieListCreateOrConnectWithoutMovieListAuthorInput } from "../inputs/MovieListCreateOrConnectWithoutMovieListAuthorInput";
import { MovieListCreateWithoutMovieListAuthorInput } from "../inputs/MovieListCreateWithoutMovieListAuthorInput";
import { MovieListScalarWhereInput } from "../inputs/MovieListScalarWhereInput";
import { MovieListUpdateManyWithWhereWithoutMovieListAuthorInput } from "../inputs/MovieListUpdateManyWithWhereWithoutMovieListAuthorInput";
import { MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput } from "../inputs/MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput";
import { MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput } from "../inputs/MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType("MovieListUpdateManyWithoutMovieListAuthorNestedInput", {})
export class MovieListUpdateManyWithoutMovieListAuthorNestedInput {
  @TypeGraphQL.Field(_type => [MovieListCreateWithoutMovieListAuthorInput], {
    nullable: true
  })
  create?: MovieListCreateWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCreateOrConnectWithoutMovieListAuthorInput], {
    nullable: true
  })
  connectOrCreate?: MovieListCreateOrConnectWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput], {
    nullable: true
  })
  upsert?: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListCreateManyMovieListAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListCreateManyMovieListAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListWhereUniqueInput], {
    nullable: true
  })
  set?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput], {
    nullable: true
  })
  update?: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListUpdateManyWithWhereWithoutMovieListAuthorInput], {
    nullable: true
  })
  updateMany?: MovieListUpdateManyWithWhereWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieListScalarWhereInput[] | undefined;
}
