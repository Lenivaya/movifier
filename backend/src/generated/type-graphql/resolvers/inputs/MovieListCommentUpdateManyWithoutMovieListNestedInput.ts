import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyMovieListInputEnvelope } from "../inputs/MovieListCommentCreateManyMovieListInputEnvelope";
import { MovieListCommentCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListCommentCreateOrConnectWithoutMovieListInput";
import { MovieListCommentCreateWithoutMovieListInput } from "../inputs/MovieListCommentCreateWithoutMovieListInput";
import { MovieListCommentScalarWhereInput } from "../inputs/MovieListCommentScalarWhereInput";
import { MovieListCommentUpdateManyWithWhereWithoutMovieListInput } from "../inputs/MovieListCommentUpdateManyWithWhereWithoutMovieListInput";
import { MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput } from "../inputs/MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput";
import { MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput } from "../inputs/MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentUpdateManyWithoutMovieListNestedInput", {})
export class MovieListCommentUpdateManyWithoutMovieListNestedInput {
  @TypeGraphQL.Field(_type => [MovieListCommentCreateWithoutMovieListInput], {
    nullable: true
  })
  create?: MovieListCommentCreateWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentCreateOrConnectWithoutMovieListInput], {
    nullable: true
  })
  connectOrCreate?: MovieListCommentCreateOrConnectWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput], {
    nullable: true
  })
  upsert?: MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentCreateManyMovieListInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListCommentCreateManyMovieListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  set?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput], {
    nullable: true
  })
  update?: MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentUpdateManyWithWhereWithoutMovieListInput], {
    nullable: true
  })
  updateMany?: MovieListCommentUpdateManyWithWhereWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieListCommentScalarWhereInput[] | undefined;
}
