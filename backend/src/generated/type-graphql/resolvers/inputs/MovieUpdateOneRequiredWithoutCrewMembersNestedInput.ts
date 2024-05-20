import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutCrewMembersInput } from "../inputs/MovieCreateOrConnectWithoutCrewMembersInput";
import { MovieCreateWithoutCrewMembersInput } from "../inputs/MovieCreateWithoutCrewMembersInput";
import { MovieUpdateToOneWithWhereWithoutCrewMembersInput } from "../inputs/MovieUpdateToOneWithWhereWithoutCrewMembersInput";
import { MovieUpsertWithoutCrewMembersInput } from "../inputs/MovieUpsertWithoutCrewMembersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutCrewMembersNestedInput", {})
export class MovieUpdateOneRequiredWithoutCrewMembersNestedInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutCrewMembersInput, {
    nullable: true
  })
  create?: MovieCreateWithoutCrewMembersInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutCrewMembersInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutCrewMembersInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutCrewMembersInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutCrewMembersInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateToOneWithWhereWithoutCrewMembersInput, {
    nullable: true
  })
  update?: MovieUpdateToOneWithWhereWithoutCrewMembersInput | undefined;
}
