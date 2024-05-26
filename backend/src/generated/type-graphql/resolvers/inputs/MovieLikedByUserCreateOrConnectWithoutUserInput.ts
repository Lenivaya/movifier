import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateWithoutUserInput } from "../inputs/MovieLikedByUserCreateWithoutUserInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateOrConnectWithoutUserInput", {})
export class MovieLikedByUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieLikedByUserCreateWithoutUserInput;
}
