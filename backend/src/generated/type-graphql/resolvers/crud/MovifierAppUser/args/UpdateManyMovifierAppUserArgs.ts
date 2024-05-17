import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserUpdateManyMutationInput } from "../../../inputs/MovifierAppUserUpdateManyMutationInput";
import { MovifierAppUserWhereInput } from "../../../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => MovifierAppUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovifierAppUserUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MovifierAppUserWhereInput, {
    nullable: true,
  })
  where?: MovifierAppUserWhereInput | undefined;
}
