import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieRatingWhereInput } from "../../../inputs/MovieRatingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieRatingArgs {
  @TypeGraphQL.Field(_type => MovieRatingWhereInput, {
    nullable: true
  })
  where?: MovieRatingWhereInput | undefined;
}
