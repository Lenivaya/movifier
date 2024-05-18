import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/GenreOrderByWithRelationAndSearchRelevanceInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGenreArgs {
  @TypeGraphQL.Field((_type) => GenreWhereInput, {
    nullable: true,
  })
  where?: GenreWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [GenreOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: GenreOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field((_type) => GenreWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GenreWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
