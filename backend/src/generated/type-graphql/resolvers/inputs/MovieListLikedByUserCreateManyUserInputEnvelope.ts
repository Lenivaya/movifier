import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieListLikedByUserCreateManyUserInput } from "../inputs/MovieListLikedByUserCreateManyUserInput";

@TypeGraphQL.InputType("MovieListLikedByUserCreateManyUserInputEnvelope", {})
export class MovieListLikedByUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieListLikedByUserCreateManyUserInput], {
    nullable: false
  })
  data!: MovieListLikedByUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
