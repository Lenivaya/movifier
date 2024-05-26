import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCountAggregate } from "../outputs/MovieListCountAggregate";
import { MovieListMaxAggregate } from "../outputs/MovieListMaxAggregate";
import { MovieListMinAggregate } from "../outputs/MovieListMinAggregate";

@TypeGraphQL.ObjectType("MovieListGroupBy", {})
export class MovieListGroupBy {
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
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  tags!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => MovieListCountAggregate, {
    nullable: true
  })
  _count!: MovieListCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieListMinAggregate, {
    nullable: true
  })
  _min!: MovieListMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieListMaxAggregate, {
    nullable: true
  })
  _max!: MovieListMaxAggregate | null;
}
