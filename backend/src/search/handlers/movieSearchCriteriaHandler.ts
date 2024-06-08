import { ISearchCriteriaHandler } from '@/interfaces/ISearchCriteriaHandler'
import { SearchMoviesArgs } from '@/graphql/movies/args/searchMoviesArgs'
import { Prisma } from '@prisma/client'
import { isSome } from '@/lib/types/option'
import { D } from '@mobily/ts-belt'

export class MovieSearchCriteriaHandler
  implements ISearchCriteriaHandler<SearchMoviesArgs, Prisma.MovieWhereInput>
{
  constructor(public searchCriteriaArgs: SearchMoviesArgs) {}

  buildWhere(): Prisma.MovieWhereInput {
    let where: Prisma.MovieWhereInput = {}

    const search = this.searchCriteriaArgs.searchCriteria?.search
    if (isSome(search)) {
      const patterns = search
        .split(' ')
        .slice(0, 10)
        .filter((word) => word.length > 0)
        .map((word) => `%${word}%`)

      let and: Prisma.MovieWhereInput[] = []
      patterns.forEach((pattern) => {
        let or: Prisma.MovieWhereInput[] = []

        or.push({
          movieInfo: {
            OR: [
              { title: { contains: pattern, mode: 'insensitive' } },
              { description: { contains: pattern, mode: 'insensitive' } },
              { imdbId: { contains: pattern, mode: 'insensitive' } },
              { alternativeTitles: { has: pattern } }
            ]
          }
        })

        or.push({
          crewMembers: {
            some: {
              crewMember: {
                is: {
                  OR: [
                    { name: { contains: pattern, mode: 'insensitive' } },
                    { imdbId: { contains: pattern, mode: 'insensitive' } }
                  ]
                }
              }
            }
          }
        })

        or.push({
          genres: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          studios: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          spokenLanguages: {
            some: {
              OR: [{ language: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        or.push({
          keywordCategories: {
            some: {
              OR: [{ name: { contains: pattern, mode: 'insensitive' } }]
            }
          }
        })

        and.push({ OR: or })
      })

      where.AND = and
    }

    const genre = this.searchCriteriaArgs.searchCriteria?.genre
    if (isSome(genre)) {
      where.genres = {
        ...where.genres,
        some: {
          name: {
            contains: genre
          }
        }
      }
    }

    const decade = this.searchCriteriaArgs.searchCriteria?.decade
    if (isSome(decade)) {
      const startDate = new Date(decade, 0, 1)
      const endDate = new Date(decade + 10, 0, 1)

      where.movieInfo = D.merge(where.movieInfo, {
        releaseDate: {
          gte: startDate,
          lt: endDate
        }
      })
    }

    const year = this.searchCriteriaArgs.searchCriteria?.year
    if (isSome(year)) {
      const startDate = new Date(year, 0, 1)
      const endDate = new Date(year + 1, 0, 1)

      where.movieInfo = D.merge(where.movieInfo, {
        releaseDate: {
          gte: startDate,
          lt: endDate
        }
      })
    }

    const keyword = this.searchCriteriaArgs.searchCriteria?.keyword
    if (isSome(keyword)) {
      where.keywordCategories = {
        some: {
          name: {
            contains: `%${keyword}%`,
            mode: 'insensitive'
          }
        }
      }
    }

    const language = this.searchCriteriaArgs.searchCriteria?.language
    if (isSome(language)) {
      where.spokenLanguages = {
        some: {
          language: {
            contains: `%${language}%`,
            mode: 'insensitive'
          }
        }
      }
    }

    const studio = this.searchCriteriaArgs.searchCriteria?.studio
    if (isSome(studio)) {
      where.studios = {
        some: {
          name: {
            contains: `%${studio}%`,
            mode: 'insensitive'
          }
        }
      }
    }

    return where
  }
}
