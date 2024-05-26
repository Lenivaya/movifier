import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCountAggregate } from "../outputs/MovieListLikedByUserCountAggregate";
import { MovieListLikedByUserMaxAggregate } from "../outputs/MovieListLikedByUserMaxAggregate";
import { MovieListLikedByUserMinAggregate } from "../outputs/MovieListLikedByUserMinAggregate";

@TypeGraphQL.ObjectType("MovieListLikedByUserGroupBy", {})
export class MovieListLikedByUserGroupBy {
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
  movieListId!: string;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCountAggregate, {
    nullable: true
  })
  _count!: MovieListLikedByUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieListLikedByUserMinAggregate, {
    nullable: true
  })
  _min!: MovieListLikedByUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieListLikedByUserMaxAggregate, {
    nullable: true
  })
  _max!: MovieListLikedByUserMaxAggregate | null;
}
