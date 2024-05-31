import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput";
import { MovieWatchedByUserWhereInput } from "../../../inputs/MovieWatchedByUserWhereInput";
import { MovieWatchedByUserWhereUniqueInput } from "../../../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereInput, {
    nullable: true
  })
  where?: MovieWatchedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieWatchedByUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
