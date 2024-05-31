import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieUpdateManyMutationInput } from "../../../inputs/MovieCrewMemberOnMovieUpdateManyMutationInput";
import { MovieCrewMemberOnMovieWhereInput } from "../../../inputs/MovieCrewMemberOnMovieWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieCrewMemberOnMovieArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieCrewMemberOnMovieUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberOnMovieWhereInput | undefined;
}
