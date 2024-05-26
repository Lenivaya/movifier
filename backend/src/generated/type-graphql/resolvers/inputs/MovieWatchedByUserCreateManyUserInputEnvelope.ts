import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWatchedByUserCreateManyUserInput } from "../inputs/MovieWatchedByUserCreateManyUserInput";

@TypeGraphQL.InputType("MovieWatchedByUserCreateManyUserInputEnvelope", {})
export class MovieWatchedByUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieWatchedByUserCreateManyUserInput], {
    nullable: false
  })
  data!: MovieWatchedByUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
