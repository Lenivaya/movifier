import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCountLikedByArgs } from "./args/MovieReviewCountLikedByArgs";

@TypeGraphQL.ObjectType("MovieReviewCount", {})
export class MovieReviewCount {
  likedBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedBy",
    nullable: false
  })
  getLikedBy(@TypeGraphQL.Root() root: MovieReviewCount, @TypeGraphQL.Args() args: MovieReviewCountLikedByArgs): number {
    return root.likedBy;
  }
}
