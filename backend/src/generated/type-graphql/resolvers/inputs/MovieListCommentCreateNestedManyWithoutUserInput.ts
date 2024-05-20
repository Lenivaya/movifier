import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyUserInputEnvelope } from "../inputs/MovieListCommentCreateManyUserInputEnvelope";
import { MovieListCommentCreateOrConnectWithoutUserInput } from "../inputs/MovieListCommentCreateOrConnectWithoutUserInput";
import { MovieListCommentCreateWithoutUserInput } from "../inputs/MovieListCommentCreateWithoutUserInput";
import { MovieListCommentWhereUniqueInput } from "../inputs/MovieListCommentWhereUniqueInput";

@TypeGraphQL.InputType("MovieListCommentCreateNestedManyWithoutUserInput", {})
export class MovieListCommentCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieListCommentCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieListCommentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieListCommentCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieListCommentCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieListCommentCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieListCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieListCommentWhereUniqueInput[] | undefined;
}
