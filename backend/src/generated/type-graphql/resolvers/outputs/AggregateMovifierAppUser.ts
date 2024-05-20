import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserCountAggregate } from "../outputs/MovifierAppUserCountAggregate";
import { MovifierAppUserMaxAggregate } from "../outputs/MovifierAppUserMaxAggregate";
import { MovifierAppUserMinAggregate } from "../outputs/MovifierAppUserMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovifierAppUser", {})
export class AggregateMovifierAppUser {
  @TypeGraphQL.Field(_type => MovifierAppUserCountAggregate, {
    nullable: true
  })
  _count!: MovifierAppUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MovifierAppUserMinAggregate, {
    nullable: true
  })
  _min!: MovifierAppUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MovifierAppUserMaxAggregate, {
    nullable: true
  })
  _max!: MovifierAppUserMaxAggregate | null;
}
