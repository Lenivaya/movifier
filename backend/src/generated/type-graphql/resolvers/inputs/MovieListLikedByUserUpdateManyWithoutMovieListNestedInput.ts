import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyMovieListInputEnvelope } from "../inputs/MovieListLikedByUserCreateManyMovieListInputEnvelope";
import { MovieListLikedByUserCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateOrConnectWithoutMovieListInput";
import { MovieListLikedByUserCreateWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateWithoutMovieListInput";
import { MovieListLikedByUserScalarWhereInput } from "../inputs/MovieListLikedByUserScalarWhereInput";
import { MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput } from "../inputs/MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput";
import { MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput } from "../inputs/MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput";
import { MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput } from "../inputs/MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserUpdateManyWithoutMovieListNestedInput", {})
export class MovieListLikedByUserUpdateManyWithoutMovieListNestedInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateWithoutMovieListInput], {
    nullable: true
  })
  create?: MovieListLikedByUserCreateWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateOrConnectWithoutMovieListInput], {
    nullable: true
  })
  connectOrCreate?: MovieListLikedByUserCreateOrConnectWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput], {
    nullable: true
  })
  upsert?: MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateManyMovieListInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListLikedByUserCreateManyMovieListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput], {
    nullable: true
  })
  update?: MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput], {
    nullable: true
  })
  updateMany?: MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieListLikedByUserScalarWhereInput[] | undefined;
}
