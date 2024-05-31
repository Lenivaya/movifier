import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserOrderByWithAggregationInput } from "../../../inputs/MovifierAppUserOrderByWithAggregationInput";
import { MovifierAppUserScalarWhereWithAggregatesInput } from "../../../inputs/MovifierAppUserScalarWhereWithAggregatesInput";
import { MovifierAppUserWhereInput } from "../../../inputs/MovifierAppUserWhereInput";
import { MovifierAppUserScalarFieldEnum } from "../../../../enums/MovifierAppUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovifierAppUserArgs {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovifierAppUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovifierAppUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "email" | "username" | "password" | "name" | "role">;

  @TypeGraphQL.Field(_type => MovifierAppUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovifierAppUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
