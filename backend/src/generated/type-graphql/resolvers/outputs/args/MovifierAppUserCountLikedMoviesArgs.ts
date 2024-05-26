import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserWhereInput } from "../../inputs/MovieLikedByUserWhereInput";

@TypeGraphQL.ArgsType()
export class MovifierAppUserCountLikedMoviesArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereInput, {
    nullable: true
  })
  where?: MovieLikedByUserWhereInput | undefined;
}
