import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieInfoCreateInput } from "../../../inputs/MovieInfoCreateInput";
import { MovieInfoUpdateInput } from "../../../inputs/MovieInfoUpdateInput";
import { MovieInfoWhereUniqueInput } from "../../../inputs/MovieInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieInfoArgs {
  @TypeGraphQL.Field((_type) => MovieInfoWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieInfoWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieInfoCreateInput, {
    nullable: false,
  })
  create!: MovieInfoCreateInput;

  @TypeGraphQL.Field((_type) => MovieInfoUpdateInput, {
    nullable: false,
  })
  update!: MovieInfoUpdateInput;
}
