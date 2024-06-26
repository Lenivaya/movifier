import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput";
import { MovieSpokenLanguageWhereInput } from "../../../inputs/MovieSpokenLanguageWhereInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../../../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieSpokenLanguageArgs {
  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereInput, {
    nullable: true
  })
  where?: MovieSpokenLanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieSpokenLanguageWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieSpokenLanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
