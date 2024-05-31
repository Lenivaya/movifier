import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput";
import { MovieLikedByUserWhereInput } from "../../../inputs/MovieLikedByUserWhereInput";
import { MovieLikedByUserWhereUniqueInput } from "../../../inputs/MovieLikedByUserWhereUniqueInput";
import { MovieLikedByUserScalarFieldEnum } from "../../../../enums/MovieLikedByUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieLikedByUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieLikedByUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"createdAt" | "userId" | "movieId"> | undefined;
}
