import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserMovieWatchlistCountAggregate } from "../outputs/UserMovieWatchlistCountAggregate";
import { UserMovieWatchlistMaxAggregate } from "../outputs/UserMovieWatchlistMaxAggregate";
import { UserMovieWatchlistMinAggregate } from "../outputs/UserMovieWatchlistMinAggregate";

@TypeGraphQL.ObjectType("UserMovieWatchlistGroupBy", {})
export class UserMovieWatchlistGroupBy {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieId!: string;

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
