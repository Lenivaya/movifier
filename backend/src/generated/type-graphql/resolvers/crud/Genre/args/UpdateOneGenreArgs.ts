import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreUpdateInput } from "../../../inputs/GenreUpdateInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGenreArgs {
  @TypeGraphQL.Field(_type => GenreUpdateInput, {
    nullable: false
  })
  data!: GenreUpdateInput;

  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;
}
