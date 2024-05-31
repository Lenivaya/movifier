import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput";
import { MovieCrewMemberOnMovieCreateWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieInput";
import { MovieCrewMemberOnMovieScalarWhereInput } from "../inputs/MovieCrewMemberOnMovieScalarWhereInput";
import { MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput";
import { MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput";
import { MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput", {})
export class MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieCrewMemberOnMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieCrewMemberOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;
}
