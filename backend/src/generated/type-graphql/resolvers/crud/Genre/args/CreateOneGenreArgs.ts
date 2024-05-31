import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreCreateInput } from "../../../inputs/GenreCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGenreArgs {
  @TypeGraphQL.Field(_type => GenreCreateInput, {
    nullable: false
  })
  data!: GenreCreateInput;
}
