import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateWithoutInWatchlistByUsersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutInWatchlistByUsersInput", {})
export class MovieCreateOrConnectWithoutInWatchlistByUsersInput {
  @TypeGraphQL.Field((_type) => MovieWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieCreateWithoutInWatchlistByUsersInput, {
    nullable: false,
  })
  create!: MovieCreateWithoutInWatchlistByUsersInput;
}
