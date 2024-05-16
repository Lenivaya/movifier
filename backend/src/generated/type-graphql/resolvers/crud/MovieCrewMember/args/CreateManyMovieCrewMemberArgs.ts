import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberCreateManyInput } from "../../../inputs/MovieCrewMemberCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieCrewMemberArgs {
  @TypeGraphQL.Field((_type) => [MovieCrewMemberCreateManyInput], {
    nullable: false,
  })
  data!: MovieCrewMemberCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
