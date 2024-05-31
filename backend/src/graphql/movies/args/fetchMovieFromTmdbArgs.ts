import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class FetchMovieFromTmdbArgs {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  imdbId!: string
}
