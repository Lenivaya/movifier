import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieListCreateManyInput } from "../../../inputs/MovieListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieListArgs {
  @TypeGraphQL.Field(_type => [MovieListCreateManyInput], {
    nullable: false
  })
  data!: MovieListCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
