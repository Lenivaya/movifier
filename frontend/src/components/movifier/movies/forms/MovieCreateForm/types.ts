export type PersonOnMovieType = {
  id: string
  name: string
}

export type MoviePersonsSelection = {
  movieCrewMemberId: string
  personOnMovieRoles: PersonOnMovieType[]
}
