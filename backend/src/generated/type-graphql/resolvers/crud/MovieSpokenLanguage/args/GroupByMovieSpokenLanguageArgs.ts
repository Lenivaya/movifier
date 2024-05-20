import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageOrderByWithAggregationInput } from "../../../inputs/MovieSpokenLanguageOrderByWithAggregationInput";
import { MovieSpokenLanguageScalarWhereWithAggregatesInput } from "../../../inputs/MovieSpokenLanguageScalarWhereWithAggregatesInput";
import { MovieSpokenLanguageWhereInput } from "../../../inputs/MovieSpokenLanguageWhereInput";
import { MovieSpokenLanguageScalarFieldEnum } from "../../../../enums/MovieSpokenLanguageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieSpokenLanguageArgs {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereInput, {
    nullable: true
  })
  where?: MovieSpokenLanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieSpokenLanguageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"language" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieSpokenLanguageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
