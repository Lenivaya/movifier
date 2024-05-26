import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserUpdateInput } from "../../../inputs/MovieLikedByUserUpdateInput";
import { MovieLikedByUserWhereUniqueInput } from "../../../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateInput, {
    nullable: false
  })
  data!: MovieLikedByUserUpdateInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;
}
