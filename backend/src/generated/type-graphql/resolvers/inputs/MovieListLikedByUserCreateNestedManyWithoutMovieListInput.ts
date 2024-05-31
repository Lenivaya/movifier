import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyMovieListInputEnvelope } from "../inputs/MovieListLikedByUserCreateManyMovieListInputEnvelope";
import { MovieListLikedByUserCreateOrConnectWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateOrConnectWithoutMovieListInput";
import { MovieListLikedByUserCreateWithoutMovieListInput } from "../inputs/MovieListLikedByUserCreateWithoutMovieListInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateNestedManyWithoutMovieListInput", {})
export class MovieListLikedByUserCreateNestedManyWithoutMovieListInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateWithoutMovieListInput], {
    nullable: true
  })
  create?: MovieListLikedByUserCreateWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateOrConnectWithoutMovieListInput], {
    nullable: true
  })
  connectOrCreate?: MovieListLikedByUserCreateOrConnectWithoutMovieListInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateManyMovieListInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListLikedByUserCreateManyMovieListInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListLikedByUserWhereUniqueInput[] | undefined;
}
