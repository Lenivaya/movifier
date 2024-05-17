import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutStudiosInput } from "../inputs/MovieCreateOrConnectWithoutStudiosInput";
import { MovieCreateWithoutStudiosInput } from "../inputs/MovieCreateWithoutStudiosInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutStudiosInput", {})
export class MovieCreateNestedManyWithoutStudiosInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutStudiosInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieCreateOrConnectWithoutStudiosInput], {
    nullable: true,
  })
  connectOrCreate?: MovieCreateOrConnectWithoutStudiosInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
