import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutGenresInput } from "../inputs/MovieCreateOrConnectWithoutGenresInput";
import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutGenresInput } from "../inputs/MovieUpdateManyWithWhereWithoutGenresInput";
import { MovieUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutGenresInput";
import { MovieUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateManyWithoutGenresNestedInput", {})
export class MovieUpdateManyWithoutGenresNestedInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutGenresInput], {
    nullable: true
  })
  create?: MovieCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutGenresInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
