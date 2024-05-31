import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyMovieInputEnvelope } from "../inputs/MovieLikedByUserCreateManyMovieInputEnvelope";
import { MovieLikedByUserCreateOrConnectWithoutMovieInput } from "../inputs/MovieLikedByUserCreateOrConnectWithoutMovieInput";
import { MovieLikedByUserCreateWithoutMovieInput } from "../inputs/MovieLikedByUserCreateWithoutMovieInput";
import { MovieLikedByUserScalarWhereInput } from "../inputs/MovieLikedByUserScalarWhereInput";
import { MovieLikedByUserUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieLikedByUserUpdateManyWithWhereWithoutMovieInput";
import { MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput";
import { MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserUpdateManyWithoutMovieNestedInput", {})
export class MovieLikedByUserUpdateManyWithoutMovieNestedInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieLikedByUserCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikedByUserCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikedByUserCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieLikedByUserUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieLikedByUserScalarWhereInput[] | undefined;
}
