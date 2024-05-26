import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserCreateInput } from "../../../inputs/MovieLikedByUserCreateInput";
import { MovieLikedByUserUpdateInput } from "../../../inputs/MovieLikedByUserUpdateInput";
import { MovieLikedByUserWhereUniqueInput } from "../../../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateInput, {
    nullable: false
  })
  create!: MovieLikedByUserCreateInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserUpdateInput, {
    nullable: false
  })
  update!: MovieLikedByUserUpdateInput;
}
