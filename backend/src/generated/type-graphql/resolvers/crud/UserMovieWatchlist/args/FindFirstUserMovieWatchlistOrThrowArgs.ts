import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput";
import { UserMovieWatchlistWhereInput } from "../../../inputs/UserMovieWatchlistWhereInput";
import { UserMovieWatchlistWhereUniqueInput } from "../../../inputs/UserMovieWatchlistWhereUniqueInput";
import { UserMovieWatchlistScalarFieldEnum } from "../../../../enums/UserMovieWatchlistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserMovieWatchlistOrThrowArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  where?: UserMovieWatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserMovieWatchlistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserMovieWatchlistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"createdAt" | "userId" | "movieId"> | undefined;
}
