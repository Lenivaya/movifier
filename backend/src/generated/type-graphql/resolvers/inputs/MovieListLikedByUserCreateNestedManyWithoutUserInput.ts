import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieListLikedByUserCreateManyUserInputEnvelope";
import { MovieListLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieListLikedByUserCreateOrConnectWithoutUserInput";
import { MovieListLikedByUserCreateWithoutUserInput } from "../inputs/MovieListLikedByUserCreateWithoutUserInput";
import { MovieListLikedByUserWhereUniqueInput } from "../inputs/MovieListLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateNestedManyWithoutUserInput", {})
export class MovieListLikedByUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieListLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieListLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListLikedByUserWhereUniqueInput[] | undefined;
}
