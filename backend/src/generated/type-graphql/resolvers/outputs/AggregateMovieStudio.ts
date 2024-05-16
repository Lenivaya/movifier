import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCountAggregate } from "../outputs/MovieStudioCountAggregate";
import { MovieStudioMaxAggregate } from "../outputs/MovieStudioMaxAggregate";
import { MovieStudioMinAggregate } from "../outputs/MovieStudioMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieStudio", {})
export class AggregateMovieStudio {
  @TypeGraphQL.Field((_type) => MovieStudioCountAggregate, {
    nullable: true,
  })
  _count!: MovieStudioCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieStudioMinAggregate, {
    nullable: true,
  })
  _min!: MovieStudioMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieStudioMaxAggregate, {
    nullable: true,
  })
  _max!: MovieStudioMaxAggregate | null;
}
