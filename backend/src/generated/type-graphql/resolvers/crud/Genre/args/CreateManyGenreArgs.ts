import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreCreateManyInput } from "../../../inputs/GenreCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGenreArgs {
  @TypeGraphQL.Field(_type => [GenreCreateManyInput], {
    nullable: false
  })
  data!: GenreCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
