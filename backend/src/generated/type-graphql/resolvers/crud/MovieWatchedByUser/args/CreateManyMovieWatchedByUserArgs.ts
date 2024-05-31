import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieWatchedByUserCreateManyInput } from "../../../inputs/MovieWatchedByUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieWatchedByUserArgs {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateManyInput], {
    nullable: false
  })
  data!: MovieWatchedByUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
