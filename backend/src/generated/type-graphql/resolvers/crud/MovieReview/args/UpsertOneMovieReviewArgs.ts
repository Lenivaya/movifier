import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewCreateInput } from "../../../inputs/MovieReviewCreateInput";
import { MovieReviewUpdateInput } from "../../../inputs/MovieReviewUpdateInput";
import { MovieReviewWhereUniqueInput } from "../../../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateInput, {
    nullable: false
  })
  create!: MovieReviewCreateInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateInput, {
    nullable: false
  })
  update!: MovieReviewUpdateInput;
}
