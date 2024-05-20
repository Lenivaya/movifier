import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieCreateManyInput } from "../../../inputs/MovieCrewMemberOnMovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field((_type) => [MovieCrewMemberOnMovieCreateManyInput], {
    nullable: false,
  })
  data!: MovieCrewMemberOnMovieCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
