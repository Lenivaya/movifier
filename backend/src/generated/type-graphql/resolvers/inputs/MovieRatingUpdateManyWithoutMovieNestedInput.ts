import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyMovieInputEnvelope } from "../inputs/MovieRatingCreateManyMovieInputEnvelope";
import { MovieRatingCreateOrConnectWithoutMovieInput } from "../inputs/MovieRatingCreateOrConnectWithoutMovieInput";
import { MovieRatingCreateWithoutMovieInput } from "../inputs/MovieRatingCreateWithoutMovieInput";
import { MovieRatingScalarWhereInput } from "../inputs/MovieRatingScalarWhereInput";
import { MovieRatingUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieRatingUpdateManyWithWhereWithoutMovieInput";
import { MovieRatingUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieRatingUpdateWithWhereUniqueWithoutMovieInput";
import { MovieRatingUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieRatingUpsertWithWhereUniqueWithoutMovieInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingUpdateManyWithoutMovieNestedInput", {})
export class MovieRatingUpdateManyWithoutMovieNestedInput {
  @TypeGraphQL.Field(_type => [MovieRatingCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieRatingCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieRatingCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieRatingUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieRatingCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieRatingCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  set?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieRatingUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieRatingUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieRatingScalarWhereInput[] | undefined;
}
