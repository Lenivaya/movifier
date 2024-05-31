import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberTypeCountMovieCrewMembersArgs } from "./args/MovieCrewMemberTypeCountMovieCrewMembersArgs";

@TypeGraphQL.ObjectType("MovieCrewMemberTypeCount", {})
export class MovieCrewMemberTypeCount {
  movieCrewMembers!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movieCrewMembers",
    nullable: false
  })
  getMovieCrewMembers(@TypeGraphQL.Root() root: MovieCrewMemberTypeCount, @TypeGraphQL.Args() args: MovieCrewMemberTypeCountMovieCrewMembersArgs): number {
    return root.movieCrewMembers;
  }
}
