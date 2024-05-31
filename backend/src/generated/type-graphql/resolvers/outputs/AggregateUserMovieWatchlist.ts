import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCountAggregate } from "../outputs/UserMovieWatchlistCountAggregate";
import { UserMovieWatchlistMaxAggregate } from "../outputs/UserMovieWatchlistMaxAggregate";
import { UserMovieWatchlistMinAggregate } from "../outputs/UserMovieWatchlistMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserMovieWatchlist", {})
export class AggregateUserMovieWatchlist {
  @TypeGraphQL.Field(_type => UserMovieWatchlistCountAggregate, {
    nullable: true
  })
  _count!: UserMovieWatchlistCountAggregate | null;

  @TypeGraphQL.Field(_type => UserMovieWatchlistMinAggregate, {
    nullable: true
  })
  _min!: UserMovieWatchlistMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMovieWatchlistMaxAggregate, {
    nullable: true
  })
  _max!: UserMovieWatchlistMaxAggregate | null;
}
