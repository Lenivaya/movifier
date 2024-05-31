import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCreateOrConnectWithoutMoviesInput } from "../inputs/MovieStudioCreateOrConnectWithoutMoviesInput";
import { MovieStudioCreateWithoutMoviesInput } from "../inputs/MovieStudioCreateWithoutMoviesInput";
import { MovieStudioScalarWhereInput } from "../inputs/MovieStudioScalarWhereInput";
import { MovieStudioUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieStudioUpdateManyWithWhereWithoutMoviesInput";
import { MovieStudioUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieStudioUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieStudioUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieStudioUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieStudioWhereUniqueInput } from "../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.InputType("MovieStudioUpdateManyWithoutMoviesNestedInput", {})
export class MovieStudioUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field(_type => [MovieStudioCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: MovieStudioCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: MovieStudioCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: MovieStudioUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereUniqueInput], {
    nullable: true
  })
  set?: MovieStudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieStudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieStudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieStudioWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: MovieStudioUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: MovieStudioUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieStudioScalarWhereInput[] | undefined;
}
