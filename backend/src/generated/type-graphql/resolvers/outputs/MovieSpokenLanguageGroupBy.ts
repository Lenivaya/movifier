import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCountAggregate } from "../outputs/MovieSpokenLanguageCountAggregate";
import { MovieSpokenLanguageMaxAggregate } from "../outputs/MovieSpokenLanguageMaxAggregate";
import { MovieSpokenLanguageMinAggregate } from "../outputs/MovieSpokenLanguageMinAggregate";

@TypeGraphQL.ObjectType("MovieSpokenLanguageGroupBy", {})
export class MovieSpokenLanguageGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iso_639_1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
