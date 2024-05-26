import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput";
import { MovieListLikedByUserWhereInput } from "../../../inputs/MovieListLikedByUserWhereInput";
import { MovieListLikedByUserWhereUniqueInput } from "../../../inputs/MovieListLikedByUserWhereUniqueInput";
import { MovieListLikedByUserScalarFieldEnum } from "../../../../enums/MovieListLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieListLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieListLikedByUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"createdAt" | "userId" | "movieListId"> | undefined;
}
