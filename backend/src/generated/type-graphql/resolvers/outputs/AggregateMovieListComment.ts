import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCountAggregate } from "../outputs/MovieListCommentCountAggregate";
import { MovieListCommentMaxAggregate } from "../outputs/MovieListCommentMaxAggregate";
import { MovieListCommentMinAggregate } from "../outputs/MovieListCommentMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieListComment", {})
export class AggregateMovieListComment {
  @TypeGraphQL.Field((_type) => MovieListCommentCountAggregate, {
    nullable: true,
  })
  _count!: MovieListCommentCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListCommentMinAggregate, {
    nullable: true,
  })
  _min!: MovieListCommentMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieListCommentMaxAggregate, {
    nullable: true,
  })
  _max!: MovieListCommentMaxAggregate | null;
}
