import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoUpdateManyMutationInput } from "../../../inputs/MovieInfoUpdateManyMutationInput";
import { MovieInfoWhereInput } from "../../../inputs/MovieInfoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieInfoArgs {
  @TypeGraphQL.Field(_type => MovieInfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieInfoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieInfoWhereInput, {
    nullable: true
  })
  where?: MovieInfoWhereInput | undefined;
}
