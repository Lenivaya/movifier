import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCountAggregate } from "../outputs/MovieListCommentCountAggregate";
import { MovieListCommentMaxAggregate } from "../outputs/MovieListCommentMaxAggregate";
import { MovieListCommentMinAggregate } from "../outputs/MovieListCommentMinAggregate";

@TypeGraphQL.ObjectType("MovieListCommentGroupBy", {})
export class MovieListCommentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  movieListId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => MovieListCommentCountAggregate, {
    nullable: true
  })
  _count!: MovieListCommentCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieListCommentMinAggregate, {
    nullable: true
  })
  _min!: MovieListCommentMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieListCommentMaxAggregate, {
    nullable: true
  })
  _max!: MovieListCommentMaxAggregate | null;
}
