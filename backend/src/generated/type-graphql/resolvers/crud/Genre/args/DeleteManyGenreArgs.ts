import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGenreArgs {
  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  where?: GenreWhereInput | undefined;
}
