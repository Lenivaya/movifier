import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewWhereInput } from "../../../inputs/MovieReviewWhereInput";

@TypeGraphQL.ArgsType()
export class MovieRatingReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  where?: MovieReviewWhereInput | undefined;
}
