import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserOrderByWithRelationInput } from "../../../inputs/MovifierAppUserOrderByWithRelationInput";
import { MovifierAppUserWhereInput } from "../../../inputs/MovifierAppUserWhereInput";
import { MovifierAppUserWhereUniqueInput } from "../../../inputs/MovifierAppUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovifierAppUserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovifierAppUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovifierAppUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
