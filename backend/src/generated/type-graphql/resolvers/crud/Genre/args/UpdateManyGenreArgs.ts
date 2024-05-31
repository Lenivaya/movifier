import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreUpdateManyMutationInput } from "../../../inputs/GenreUpdateManyMutationInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGenreArgs {
  @TypeGraphQL.Field(_type => GenreUpdateManyMutationInput, {
    nullable: false
  })
  data!: GenreUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GenreWhereInput, {
    nullable: true
  })
  where?: GenreWhereInput | undefined;
}
