import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserCreateManyInput } from "../../../inputs/MovifierAppUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovifierAppUserArgs {
  @TypeGraphQL.Field((_type) => [MovifierAppUserCreateManyInput], {
    nullable: false,
  })
  data!: MovifierAppUserCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
