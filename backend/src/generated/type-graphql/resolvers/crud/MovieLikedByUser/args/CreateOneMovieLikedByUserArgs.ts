import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserCreateInput } from "../../../inputs/MovieLikedByUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserCreateInput, {
    nullable: false
  })
  data!: MovieLikedByUserCreateInput;
}
