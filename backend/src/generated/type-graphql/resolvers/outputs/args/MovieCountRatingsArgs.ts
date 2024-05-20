import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingWhereInput } from "../../inputs/MovieRatingWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountRatingsArgs {
  @TypeGraphQL.Field(_type => MovieRatingWhereInput, {
    nullable: true
  })
  where?: MovieRatingWhereInput | undefined;
}
