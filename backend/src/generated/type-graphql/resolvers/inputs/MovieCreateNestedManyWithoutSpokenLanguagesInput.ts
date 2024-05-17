import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutSpokenLanguagesInput } from "../inputs/MovieCreateOrConnectWithoutSpokenLanguagesInput";
import { MovieCreateWithoutSpokenLanguagesInput } from "../inputs/MovieCreateWithoutSpokenLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutSpokenLanguagesInput", {})
export class MovieCreateNestedManyWithoutSpokenLanguagesInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutSpokenLanguagesInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutSpokenLanguagesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCreateOrConnectWithoutSpokenLanguagesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCreateOrConnectWithoutSpokenLanguagesInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
