import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyUserInputEnvelope } from "../inputs/MovieLikedByUserCreateManyUserInputEnvelope";
import { MovieLikedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieLikedByUserCreateOrConnectWithoutUserInput";
import { MovieLikedByUserCreateWithoutUserInput } from "../inputs/MovieLikedByUserCreateWithoutUserInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateNestedManyWithoutUserInput", {})
export class MovieLikedByUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieLikedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikedByUserWhereUniqueInput[] | undefined;
}
