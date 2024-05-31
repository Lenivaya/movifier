import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewUpdateInput } from "../../../inputs/MovieReviewUpdateInput";
import { MovieReviewWhereUniqueInput } from "../../../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewUpdateInput, {
    nullable: false
  })
  data!: MovieReviewUpdateInput;

  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;
}
