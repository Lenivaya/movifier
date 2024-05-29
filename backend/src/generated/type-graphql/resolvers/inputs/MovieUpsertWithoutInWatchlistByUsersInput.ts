import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateWithoutInWatchlistByUsersInput";
import { MovieUpdateWithoutInWatchlistByUsersInput } from "../inputs/MovieUpdateWithoutInWatchlistByUsersInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpsertWithoutInWatchlistByUsersInput", {})
export class MovieUpsertWithoutInWatchlistByUsersInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutInWatchlistByUsersInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutInWatchlistByUsersInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutInWatchlistByUsersInput, {
    nullable: false
  })
  create!: MovieCreateWithoutInWatchlistByUsersInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
