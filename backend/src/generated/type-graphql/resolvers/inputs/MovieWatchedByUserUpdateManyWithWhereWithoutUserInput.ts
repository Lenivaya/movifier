import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserScalarWhereInput } from "../inputs/MovieWatchedByUserScalarWhereInput";
import { MovieWatchedByUserUpdateManyMutationInput } from "../inputs/MovieWatchedByUserUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieWatchedByUserUpdateManyWithWhereWithoutUserInput", {})
export class MovieWatchedByUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieWatchedByUserScalarWhereInput, {
    nullable: false
  })
  where!: MovieWatchedByUserScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieWatchedByUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieWatchedByUserUpdateManyMutationInput;
}
