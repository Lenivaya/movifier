import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListCommentCreateManyUserInput } from "../inputs/MovieListCommentCreateManyUserInput";

@TypeGraphQL.InputType("MovieListCommentCreateManyUserInputEnvelope", {})
export class MovieListCommentCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieListCommentCreateManyUserInput], {
    nullable: false
  })
  data!: MovieListCommentCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
