import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewCreateManyInput } from "../../../inputs/MovieReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieReviewArgs {
  @TypeGraphQL.Field(_type => [MovieReviewCreateManyInput], {
    nullable: false
  })
  data!: MovieReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
