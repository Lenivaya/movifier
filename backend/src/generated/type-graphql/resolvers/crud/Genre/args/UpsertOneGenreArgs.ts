import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreCreateInput } from "../../../inputs/GenreCreateInput";
import { GenreUpdateInput } from "../../../inputs/GenreUpdateInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGenreArgs {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreCreateInput, {
    nullable: false
  })
  create!: GenreCreateInput;

  @TypeGraphQL.Field(_type => GenreUpdateInput, {
    nullable: false
  })
  update!: GenreUpdateInput;
}
