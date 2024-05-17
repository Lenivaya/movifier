import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCreateManyMovieListAuthorInputEnvelope } from "../inputs/MovieListCreateManyMovieListAuthorInputEnvelope";
import { MovieListCreateOrConnectWithoutMovieListAuthorInput } from "../inputs/MovieListCreateOrConnectWithoutMovieListAuthorInput";
import { MovieListCreateWithoutMovieListAuthorInput } from "../inputs/MovieListCreateWithoutMovieListAuthorInput";
import { MovieListWhereUniqueInput } from "../inputs/MovieListWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieListCreateNestedManyWithoutMovieListAuthorInput",
  {},
)
export class MovieListCreateNestedManyWithoutMovieListAuthorInput {
  @TypeGraphQL.Field((_type) => [MovieListCreateWithoutMovieListAuthorInput], {
    nullable: true,
  })
  create?: MovieListCreateWithoutMovieListAuthorInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieListCreateOrConnectWithoutMovieListAuthorInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieListCreateOrConnectWithoutMovieListAuthorInput[]
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListCreateManyMovieListAuthorInputEnvelope,
    {
      nullable: true,
    },
  )
  createMany?: MovieListCreateManyMovieListAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieListWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieListWhereUniqueInput[] | undefined;
}
