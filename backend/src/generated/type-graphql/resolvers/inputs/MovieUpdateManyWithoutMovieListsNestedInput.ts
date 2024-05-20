import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieListsInput } from "../inputs/MovieCreateOrConnectWithoutMovieListsInput";
import { MovieCreateWithoutMovieListsInput } from "../inputs/MovieCreateWithoutMovieListsInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutMovieListsInput } from "../inputs/MovieUpdateManyWithWhereWithoutMovieListsInput";
import { MovieUpdateWithWhereUniqueWithoutMovieListsInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutMovieListsInput";
import { MovieUpsertWithWhereUniqueWithoutMovieListsInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutMovieListsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutMovieListsNestedInput", {})
export class MovieUpdateManyWithoutMovieListsNestedInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutMovieListsInput], {
    nullable: true
  })
  create?: MovieCreateWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutMovieListsInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutMovieListsInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutMovieListsInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutMovieListsInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
