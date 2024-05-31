import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyMovieInputEnvelope } from "../inputs/MovieRatingCreateManyMovieInputEnvelope";
import { MovieRatingCreateOrConnectWithoutMovieInput } from "../inputs/MovieRatingCreateOrConnectWithoutMovieInput";
import { MovieRatingCreateWithoutMovieInput } from "../inputs/MovieRatingCreateWithoutMovieInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateNestedManyWithoutMovieInput", {})
export class MovieRatingCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieRatingCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieRatingCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieRatingCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieRatingCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieRatingCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieRatingWhereUniqueInput[] | undefined;
}
