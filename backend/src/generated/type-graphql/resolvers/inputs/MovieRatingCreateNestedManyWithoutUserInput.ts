import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieRatingCreateManyUserInputEnvelope } from "../inputs/MovieRatingCreateManyUserInputEnvelope";
import { MovieRatingCreateOrConnectWithoutUserInput } from "../inputs/MovieRatingCreateOrConnectWithoutUserInput";
import { MovieRatingCreateWithoutUserInput } from "../inputs/MovieRatingCreateWithoutUserInput";
import { MovieRatingWhereUniqueInput } from "../inputs/MovieRatingWhereUniqueInput";

@TypeGraphQL.InputType("MovieRatingCreateNestedManyWithoutUserInput", {})
export class MovieRatingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieRatingCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieRatingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieRatingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieRatingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieRatingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieRatingWhereUniqueInput[] | undefined;
}
