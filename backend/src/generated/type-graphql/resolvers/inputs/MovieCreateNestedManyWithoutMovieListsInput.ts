import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutMovieListsInput } from "../inputs/MovieCreateOrConnectWithoutMovieListsInput";
import { MovieCreateWithoutMovieListsInput } from "../inputs/MovieCreateWithoutMovieListsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutMovieListsInput", {})
export class MovieCreateNestedManyWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutMovieListsInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCreateOrConnectWithoutMovieListsInput], {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutMovieListsInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
