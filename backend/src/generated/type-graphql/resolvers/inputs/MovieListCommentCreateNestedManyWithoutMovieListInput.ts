import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyMovieListInputEnvelope } from "../inputs/MovieListCommentCreateManyMovieListInputEnvelope";
import { MovieListCommentCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListCommentCreateOrConnectWithoutMovieListInput";
import { MovieListCommentCreateWithoutMovieListInput } from "../inputs/MovieListCommentCreateWithoutMovieListInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentCreateNestedManyWithoutMovieListInput", {})
export class MovieListCommentCreateNestedManyWithoutMovieListInput {
  @TypeGraphQL.Field(_type => [MovieListCommentCreateWithoutMovieListInput], {
    nullable: true
  })
  create?: MovieListCommentCreateWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentCreateOrConnectWithoutMovieListInput], {
    nullable: true
  })
  connectOrCreate?: MovieListCommentCreateOrConnectWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentCreateManyMovieListInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListCommentCreateManyMovieListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListCommentWhereUniqueInput[] | undefined;
}
