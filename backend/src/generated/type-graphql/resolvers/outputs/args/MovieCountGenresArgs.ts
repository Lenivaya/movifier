import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreWhereInput } from "../../inputs/GenreWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountGenresArgs {
  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  where?: GenreWhereInput | undefined;
}
