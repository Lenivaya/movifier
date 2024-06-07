import * as TypeGraphQL from "type-graphql";

export enum MovieCrewMemberOnMovieScalarFieldEnum {
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  order = "order",
  movieId = "movieId",
  movieCrewMemberId = "movieCrewMemberId",
  movieCrewMemberTypeId = "movieCrewMemberTypeId"
}
TypeGraphQL.registerEnumType(MovieCrewMemberOnMovieScalarFieldEnum, {
  name: "MovieCrewMemberOnMovieScalarFieldEnum",
  description: undefined,
});
