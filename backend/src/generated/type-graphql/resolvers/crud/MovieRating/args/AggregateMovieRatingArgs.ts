import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingOrderByWithRelationInput } from "../../../inputs/MovieRatingOrderByWithRelationInput";
import { MovieRatingWhereInput } from "../../../inputs/MovieRatingWhereInput";
import { MovieRatingWhereUniqueInput } from "../../../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieRatingArgs {
  @TypeGraphQL.Field((_type) => MovieRatingWhereInput, {
    nullable: true,
  })
  where?: MovieRatingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieRatingOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieRatingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieRatingWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
