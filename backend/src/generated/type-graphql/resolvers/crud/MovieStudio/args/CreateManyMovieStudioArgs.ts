import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioCreateManyInput } from "../../../inputs/MovieStudioCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieStudioArgs {
  @TypeGraphQL.Field((_type) => [MovieStudioCreateManyInput], {
    nullable: false,
  })
  data!: MovieStudioCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
