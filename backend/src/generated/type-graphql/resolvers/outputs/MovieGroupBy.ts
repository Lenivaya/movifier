import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";

@TypeGraphQL.ObjectType("MovieGroupBy", {})
export class MovieGroupBy {
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

  @TypeGraphQL.Field(_type => MovieCountAggregate, {
    nullable: true
  })
  _count!: MovieCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieMinAggregate, {
    nullable: true
  })
  _min!: MovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieMaxAggregate | null;
}
