import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyMovieInputEnvelope } from "../inputs/MovieLikedByUserCreateManyMovieInputEnvelope";
import { MovieLikedByUserCreateOrConnectWithoutMovieInput } from "../inputs/MovieLikedByUserCreateOrConnectWithoutMovieInput";
import { MovieLikedByUserCreateWithoutMovieInput } from "../inputs/MovieLikedByUserCreateWithoutMovieInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateNestedManyWithoutMovieInput", {})
export class MovieLikedByUserCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieLikedByUserCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikedByUserCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikedByUserCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikedByUserWhereUniqueInput[] | undefined;
}
