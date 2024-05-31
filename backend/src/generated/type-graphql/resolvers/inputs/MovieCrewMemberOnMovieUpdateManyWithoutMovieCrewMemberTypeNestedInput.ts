import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope } from "../inputs/MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope";
import { MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieScalarWhereInput } from "../inputs/MovieCrewMemberOnMovieScalarWhereInput";
import { MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput } from "../inputs/MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput";
import { MovieCrewMemberOnMovieWhereUniqueInput } from "../inputs/MovieCrewMemberOnMovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput", {})
export class MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput {
  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput], {
    nullable: true
  })
  create?: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput], {
    nullable: true
  })
  connectOrCreate?: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput], {
    nullable: true
  })
  upsert?: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput], {
    nullable: true
  })
  update?: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput], {
    nullable: true
  })
  updateMany?: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCrewMemberOnMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieCrewMemberOnMovieScalarWhereInput[] | undefined;
}
