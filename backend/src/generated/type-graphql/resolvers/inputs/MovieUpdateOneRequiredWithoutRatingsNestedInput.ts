import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutRatingsInput } from "../inputs/MovieCreateOrConnectWithoutRatingsInput";
import { MovieCreateWithoutRatingsInput } from "../inputs/MovieCreateWithoutRatingsInput";
import { MovieUpdateToOneWithWhereWithoutRatingsInput } from "../inputs/MovieUpdateToOneWithWhereWithoutRatingsInput";
import { MovieUpsertWithoutRatingsInput } from "../inputs/MovieUpsertWithoutRatingsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutRatingsNestedInput", {})
export class MovieUpdateOneRequiredWithoutRatingsNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutRatingsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutRatingsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutRatingsInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutRatingsInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutRatingsInput | undefined;
}
