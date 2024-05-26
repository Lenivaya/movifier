import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateManyUserInputEnvelope } from "../inputs/MovieWatchedByUserCreateManyUserInputEnvelope";
import { MovieWatchedByUserCreateOrConnectWithoutUserInput } from "../inputs/MovieWatchedByUserCreateOrConnectWithoutUserInput";
import { MovieWatchedByUserCreateWithoutUserInput } from "../inputs/MovieWatchedByUserCreateWithoutUserInput";
import { MovieWatchedByUserWhereUniqueInput } from "../inputs/MovieWatchedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateNestedManyWithoutUserInput", {})
export class MovieWatchedByUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieWatchedByUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieWatchedByUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieWatchedByUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieWatchedByUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWatchedByUserWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWatchedByUserWhereUniqueInput[] | undefined;
}
