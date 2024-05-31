import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieInfoCreateOrConnectWithoutMovieInput } from "../inputs/MovieInfoCreateOrConnectWithoutMovieInput";
import { MovieInfoCreateWithoutMovieInput } from "../inputs/MovieInfoCreateWithoutMovieInput";
import { MovieInfoWhereUniqueInput } from "../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.InputType("MovieInfoCreateNestedOneWithoutMovieInput", {})
export class MovieInfoCreateNestedOneWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieInfoCreateWithoutMovieInput, {
    nullable: true
  })
  create?: MovieInfoCreateWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoCreateOrConnectWithoutMovieInput, {
    nullable: true
  })
  connectOrCreate?: MovieInfoCreateOrConnectWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieInfoWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieInfoWhereUniqueInput | undefined;
}
