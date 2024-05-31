import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistScalarWhereInput } from "../inputs/UserMovieWatchlistScalarWhereInput";
import { UserMovieWatchlistUpdateManyMutationInput } from "../inputs/UserMovieWatchlistUpdateManyMutationInput";

@TypeGraphQL.InputType("UserMovieWatchlistUpdateManyWithWhereWithoutUserInput", {})
export class UserMovieWatchlistUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserMovieWatchlistScalarWhereInput, {
    nullable: false
  })
  where!: UserMovieWatchlistScalarWhereInput;

  @TypeGraphQL.Field(_type => UserMovieWatchlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserMovieWatchlistUpdateManyMutationInput;
}
