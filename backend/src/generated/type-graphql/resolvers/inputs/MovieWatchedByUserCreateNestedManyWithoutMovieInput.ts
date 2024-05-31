import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateManyMovieInputEnvelope } from "../inputs/MovieWatchedByUserCreateManyMovieInputEnvelope";
import { MovieWatchedByUserCreateOrConnectWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateOrConnectWithoutMovieInput";
import { MovieWatchedByUserCreateWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateWithoutMovieInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateNestedManyWithoutMovieInput", {})
export class MovieWatchedByUserCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieWatchedByUserCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieWatchedByUserCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieWatchedByUserCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWatchedByUserWhereUniqueInput[] | undefined;
}
