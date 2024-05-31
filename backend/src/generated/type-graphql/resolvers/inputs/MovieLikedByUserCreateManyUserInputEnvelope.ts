import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateManyUserInput } from "../inputs/MovieLikedByUserCreateManyUserInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateManyUserInputEnvelope", {})
export class MovieLikedByUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateManyUserInput], {
    nullable: false
  })
  data!: MovieLikedByUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
