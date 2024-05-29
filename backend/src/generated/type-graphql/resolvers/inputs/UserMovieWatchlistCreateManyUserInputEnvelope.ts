import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateManyUserInput } from "../inputs/UserMovieWatchlistCreateManyUserInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateManyUserInputEnvelope", {})
export class UserMovieWatchlistCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateManyUserInput], {
    nullable: false
  })
  data!: UserMovieWatchlistCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
