import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutInWatchlistByUsersInput } from "../inputs/MovieUpdateWithoutInWatchlistByUsersInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput", {})
export class MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutInWatchlistByUsersInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutInWatchlistByUsersInput;
}
