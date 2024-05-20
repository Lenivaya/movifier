import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovifierAppUserScalarWhereInput } from "../inputs/MovifierAppUserScalarWhereInput";
import { MovifierAppUserUpdateManyMutationInput } from "../inputs/MovifierAppUserUpdateManyMutationInput";

@TypeGraphQL.InputType("MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput", {})
export class MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovifierAppUserScalarWhereInput, {
    nullable: false
  })
  where!: MovifierAppUserScalarWhereInput;

  @TypeGraphQL.Field(_type => MovifierAppUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovifierAppUserUpdateManyMutationInput;
}
