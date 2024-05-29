import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateNestedOneWithoutInWatchlistByUsersInput";
import { MovifierAppUserCreateNestedOneWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateNestedOneWithoutWatchlistInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateInput", {})
export class UserMovieWatchlistCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutInWatchlistByUsersInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutInWatchlistByUsersInput;

  @TypeGraphQL.Field(_type => MovifierAppUserCreateNestedOneWithoutWatchlistInput, {
    nullable: false
  })
  user!: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
}
