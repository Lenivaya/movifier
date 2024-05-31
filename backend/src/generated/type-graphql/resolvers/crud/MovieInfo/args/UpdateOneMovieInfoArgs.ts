import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoUpdateInput } from "../../../inputs/MovieInfoUpdateInput";
import { MovieInfoWhereUniqueInput } from "../../../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieInfoArgs {
  @TypeGraphQL.Field(_type => MovieInfoUpdateInput, {
    nullable: false
  })
  data!: MovieInfoUpdateInput;

  @TypeGraphQL.Field(_type => MovieInfoWhereUniqueInput, {
    nullable: false
  })
  where!: MovieInfoWhereUniqueInput;
}
