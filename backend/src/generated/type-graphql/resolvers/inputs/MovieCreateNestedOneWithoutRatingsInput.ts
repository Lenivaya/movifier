import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutRatingsInput } from "../inputs/MovieCreateOrConnectWithoutRatingsInput";
import { MovieCreateWithoutRatingsInput } from "../inputs/MovieCreateWithoutRatingsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutRatingsInput", {})
export class MovieCreateNestedOneWithoutRatingsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutRatingsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutRatingsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
