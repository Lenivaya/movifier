import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberUpdateManyMutationInput } from "../../../inputs/MovieCrewMemberUpdateManyMutationInput";
import { MovieCrewMemberWhereInput } from "../../../inputs/MovieCrewMemberWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieCrewMemberArgs {
  @TypeGraphQL.Field((_type) => MovieCrewMemberUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MovieCrewMemberUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MovieCrewMemberWhereInput, {
    nullable: true,
  })
  where?: MovieCrewMemberWhereInput | undefined;
}
