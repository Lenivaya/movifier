import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCommentCreateManyInput } from "../../../inputs/MovieListCommentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieListCommentArgs {
  @TypeGraphQL.Field(_type => [MovieListCommentCreateManyInput], {
    nullable: false
  })
  data!: MovieListCommentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
