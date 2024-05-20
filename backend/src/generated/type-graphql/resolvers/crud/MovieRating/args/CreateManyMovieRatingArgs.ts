import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingCreateManyInput } from "../../../inputs/MovieRatingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieRatingArgs {
  @TypeGraphQL.Field(_type => [MovieRatingCreateManyInput], {
    nullable: false
  })
  data!: MovieRatingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
