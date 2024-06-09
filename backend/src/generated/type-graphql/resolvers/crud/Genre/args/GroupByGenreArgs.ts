import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreOrderByWithAggregationInput } from "../../../inputs/GenreOrderByWithAggregationInput";
import { GenreScalarWhereWithAggregatesInput } from "../../../inputs/GenreScalarWhereWithAggregatesInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";
import { GenreScalarFieldEnum } from "../../../../enums/GenreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGenreArgs {
  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  where?: GenreWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenreOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GenreOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => GenreScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GenreScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
