import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberTypeUpdateManyMutationInput } from "../../../inputs/MovieCrewMemberTypeUpdateManyMutationInput";
import { MovieCrewMemberTypeWhereInput } from "../../../inputs/MovieCrewMemberTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieCrewMemberTypeArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieCrewMemberTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieCrewMemberTypeWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberTypeWhereInput | undefined;
}
