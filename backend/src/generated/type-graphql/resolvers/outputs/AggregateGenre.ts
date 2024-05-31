import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCountAggregate } from "../outputs/GenreCountAggregate";
import { GenreMaxAggregate } from "../outputs/GenreMaxAggregate";
import { GenreMinAggregate } from "../outputs/GenreMinAggregate";

@TypeGraphQL.ObjectType("AggregateGenre", {})
export class AggregateGenre {
  @TypeGraphQL.Field(_type => GenreCountAggregate, {
    nullable: true
  })
  _count!: GenreCountAggregate | null;

  @TypeGraphQL.Field(_type => GenreMinAggregate, {
    nullable: true
  })
  _min!: GenreMinAggregate | null;

  @TypeGraphQL.Field(_type => GenreMaxAggregate, {
    nullable: true
  })
  _max!: GenreMaxAggregate | null;
}
