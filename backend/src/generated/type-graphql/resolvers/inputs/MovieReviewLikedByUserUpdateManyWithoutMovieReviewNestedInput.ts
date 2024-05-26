import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope } from "../inputs/MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope";
import { MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput";
import { MovieReviewLikedByUserCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserCreateWithoutMovieReviewInput";
import { MovieReviewLikedByUserScalarWhereInput } from "../inputs/MovieReviewLikedByUserScalarWhereInput";
import { MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput";
import { MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput";
import { MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput } from "../inputs/MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput";
import { MovieReviewLikedByUserWhereUniqueInput } from "../inputs/MovieReviewLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput", {})
export class MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateWithoutMovieReviewInput], {
    nullable: true
  })
  create?: MovieReviewLikedByUserCreateWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput], {
    nullable: true
  })
  upsert?: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  set?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikedByUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput], {
    nullable: true
  })
  update?: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput], {
    nullable: true
  })
  updateMany?: MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikedByUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewLikedByUserScalarWhereInput[] | undefined;
}
