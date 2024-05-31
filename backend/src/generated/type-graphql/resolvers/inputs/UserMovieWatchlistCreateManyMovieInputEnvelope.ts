import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCreateManyMovieInput } from "../inputs/UserMovieWatchlistCreateManyMovieInput";

@TypeGraphQL.InputType("UserMovieWatchlistCreateManyMovieInputEnvelope", {})
export class UserMovieWatchlistCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [UserMovieWatchlistCreateManyMovieInput], {
    nullable: false
  })
  data!: UserMovieWatchlistCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
