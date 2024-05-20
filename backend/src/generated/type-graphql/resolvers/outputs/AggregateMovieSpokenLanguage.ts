import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCountAggregate } from "../outputs/MovieSpokenLanguageCountAggregate";
import { MovieSpokenLanguageMaxAggregate } from "../outputs/MovieSpokenLanguageMaxAggregate";
import { MovieSpokenLanguageMinAggregate } from "../outputs/MovieSpokenLanguageMinAggregate";

@TypeGraphQL.ObjectType("AggregateMovieSpokenLanguage", {})
export class AggregateMovieSpokenLanguage {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageCountAggregate, {
    nullable: true
  })
  _count!: MovieSpokenLanguageCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageMinAggregate, {
    nullable: true
  })
  _min!: MovieSpokenLanguageMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageMaxAggregate, {
    nullable: true
  })
  _max!: MovieSpokenLanguageMaxAggregate | null;
}
