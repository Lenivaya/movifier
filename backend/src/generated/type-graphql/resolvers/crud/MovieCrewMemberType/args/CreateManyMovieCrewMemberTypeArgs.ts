import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeCreateManyInput } from "../../../inputs/MovieCrewMemberTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field(_type => [MovieCrewMemberTypeCreateManyInput], {
    nullable: false
  })
  data!: MovieCrewMemberTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
