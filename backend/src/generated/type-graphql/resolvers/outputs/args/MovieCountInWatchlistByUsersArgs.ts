import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovifierAppUserWhereInput } from "../../inputs/MovifierAppUserWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountInWatchlistByUsersArgs {
  @TypeGraphQL.Field(_type => MovifierAppUserWhereInput, {
    nullable: true
  })
  where?: MovifierAppUserWhereInput | undefined;
}
