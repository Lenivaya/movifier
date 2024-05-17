import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutGenresInput } from "../inputs/MovieCreateOrConnectWithoutGenresInput";
import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutGenresInput", {})
export class MovieCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutGenresInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCreateOrConnectWithoutGenresInput], {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
