import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateManyMovieInputEnvelope } from "../inputs/MovieWatchedByUserCreateManyMovieInputEnvelope";
import { MovieWatchedByUserCreateOrConnectWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateOrConnectWithoutMovieInput";
import { MovieWatchedByUserCreateWithoutMovieInput } from "../inputs/MovieWatchedByUserCreateWithoutMovieInput";
import { MovieWatchedByUserScalarWhereInput } from "../inputs/MovieWatchedByUserScalarWhereInput";
import { MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput";
import { MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput";
import { MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateManyWithoutMovieNestedInput", {})
export class MovieWatchedByUserUpdateManyWithoutMovieNestedInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieWatchedByUserCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieWatchedByUserCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieWatchedByUserCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWatchedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieWatchedByUserScalarWhereInput[] | undefined;
}
