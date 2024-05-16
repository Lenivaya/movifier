import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoCreateManyInput } from "../../../inputs/MovieInfoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieInfoArgs {
  @TypeGraphQL.Field((_type) => [MovieInfoCreateManyInput], {
    nullable: false,
  })
  data!: MovieInfoCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
