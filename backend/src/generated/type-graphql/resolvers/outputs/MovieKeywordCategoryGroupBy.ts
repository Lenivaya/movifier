import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieKeywordCategoryCountAggregate } from "../outputs/MovieKeywordCategoryCountAggregate";
import { MovieKeywordCategoryMaxAggregate } from "../outputs/MovieKeywordCategoryMaxAggregate";
import { MovieKeywordCategoryMinAggregate } from "../outputs/MovieKeywordCategoryMinAggregate";

@TypeGraphQL.ObjectType("MovieKeywordCategoryGroupBy", {})
export class MovieKeywordCategoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryCountAggregate, {
    nullable: true
  })
  _count!: MovieKeywordCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryMinAggregate, {
    nullable: true
  })
  _min!: MovieKeywordCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieKeywordCategoryMaxAggregate, {
    nullable: true
  })
  _max!: MovieKeywordCategoryMaxAggregate | null;
}
