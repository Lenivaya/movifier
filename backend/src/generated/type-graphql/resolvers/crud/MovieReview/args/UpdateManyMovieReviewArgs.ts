import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewUpdateManyMutationInput } from "../../../inputs/MovieReviewUpdateManyMutationInput";
import { MovieReviewWhereInput } from "../../../inputs/MovieReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  where?: MovieReviewWhereInput | undefined;
}
