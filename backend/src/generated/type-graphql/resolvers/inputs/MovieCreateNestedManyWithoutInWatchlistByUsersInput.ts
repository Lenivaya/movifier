import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateOrConnectWithoutInWatchlistByUsersInput";
import { MovieCreateWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateWithoutInWatchlistByUsersInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType(
  "MovieCreateNestedManyWithoutInWatchlistByUsersInput",
  {},
)
export class MovieCreateNestedManyWithoutInWatchlistByUsersInput {
  @TypeGraphQL.Field((_type) => [MovieCreateWithoutInWatchlistByUsersInput], {
    nullable: true,
  })
  create?: MovieCreateWithoutInWatchlistByUsersInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieCreateOrConnectWithoutInWatchlistByUsersInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MovieCreateOrConnectWithoutInWatchlistByUsersInput[]
    | undefined;

  @TypeGraphQL.Field((_type) => [MovieWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
