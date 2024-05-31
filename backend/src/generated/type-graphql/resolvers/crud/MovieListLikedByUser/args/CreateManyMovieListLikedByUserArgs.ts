import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListLikedByUserCreateManyInput } from "../../../inputs/MovieListLikedByUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieListLikedByUserArgs {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateManyInput], {
    nullable: false
  })
  data!: MovieListLikedByUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
