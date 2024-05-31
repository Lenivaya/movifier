import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserUpdateManyMutationInput } from "../../../inputs/MovieLikedByUserUpdateManyMutationInput";
import { MovieLikedByUserWhereInput } from "../../../inputs/MovieLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieLikedByUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieLikedByUserWhereInput | undefined;
}
