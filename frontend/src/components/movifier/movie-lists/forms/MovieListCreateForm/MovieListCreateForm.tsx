import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { gql } from '@apollo/client'
import {
  GetMovieListForUpdateQuery,
  useGetSelectedMovieListMoviesSuspenseQuery,
  useSearchMoviesForListCreationSuspenseQuery,
  useUpsertMovieListMutation
} from '@/lib'
import { D, F, Option } from '@mobily/ts-belt'
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { isSome } from '@/lib/types'
import { Minus } from 'lucide-react'
import { dateFormatterYear } from '@/components/movifier/generic'
import { MovieCard } from '@/components/movifier/movies/MovieCard'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { toast } from '@/components/ui/use-toast'
import { Link } from 'next-view-transitions'
import { ToastAction } from '@/components/ui/toast'

export const SearchMovies = gql`
  query SearchMoviesForListCreation(
    $search: String!
    $alreadySelectedMovies: [String!]!
  ) {
    searchMovies(
      take: 5
      searchCriteria: { search: $search }
      where: { id: { notIn: $alreadySelectedMovies } }
    ) {
      ...MinimalisticMovieSearchCardItem
    }
  }
`

export const GetSelectedMovieListMovies = gql`
  query GetSelectedMovieListMovies($movieIds: [String!]!) {
    movies(where: { id: { in: $movieIds } }) {
      ...MovieCardItem
    }
  }
`

export const UpsertMovieList = gql`
  mutation UpsertMovieList(
    $data: MovieListCreateInput!
    $updateData: MovieListUpdateInput!
    $existingListId: String!
  ) {
    upsertOneMovieList(
      where: { id: $existingListId }
      update: $updateData
      create: $data
    ) {
      id
    }
  }
`

const createMovieListSchema = z.object({
  name: z.string().min(3).max(300),
  description: z.string().min(3).max(3000),
  tags: z.string().optional()
})

export const MovieListCreateForm: FC<{
  movieListToUpdate?: Option<GetMovieListForUpdateQuery['movieList']>
}> = ({ movieListToUpdate = null }) => {
  const form = useForm<z.infer<typeof createMovieListSchema>>({
    resolver: zodResolver(createMovieListSchema)
  })

  const [tags, setTags] = useState<string[]>([])
  const [listMovieIds, setListMovieIds] = useState<string[]>([])

  const [movieSearch, setMovieSearch] = useState('')
  const { data: movieSearchData } = useSearchMoviesForListCreationSuspenseQuery(
    {
      variables: { search: movieSearch, alreadySelectedMovies: listMovieIds },
      fetchPolicy: 'cache-and-network'
    }
  )
  const isMoviesFound =
    isSome(movieSearch) && movieSearchData?.searchMovies.length > 0

  const isUpdating = isSome(movieListToUpdate)

  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const [upsertMovieList] = useUpsertMovieListMutation()

  useEffect(() => {
    form.reset({
      name: movieListToUpdate?.name ?? '',
      description: movieListToUpdate?.description ?? '',
      tags: movieListToUpdate?.tags?.join(' ') ?? ''
    })
    setTags(movieListToUpdate?.tags ?? [])
    setListMovieIds(movieListToUpdate?.movies.map((movie) => movie.id) ?? [])
  }, [movieListToUpdate])

  async function onSubmit(values: z.infer<typeof createMovieListSchema>) {
    if (!isSignedIn)
      return toast({
        title: 'You need to be signed in'
      })

    if (listMovieIds.length <= 0)
      return toast({
        title: 'No movies selected'
      })

    await upsertMovieList({
      refetchQueries: ['SearchMovieLists'],
      variables: {
        existingListId: movieListToUpdate?.id ?? '',
        updateData: {
          movies: {
            connect: listMovieIds.map((id) => ({ id }))
          },
          tags: {
            set: tags
          },
          name: { set: values.name },
          description: { set: values.description }
        },
        data: {
          movieListAuthor: {
            connect: { id: user?.id }
          },
          movies: {
            connect: listMovieIds.map((id) => ({ id }))
          },
          tags: {
            set: tags
          },
          ...D.deleteKeys(values, ['tags'])
        }
      },
      onCompleted: ({ upsertOneMovieList }) => {
        toast({
          title: `Movie list ${isUpdating ? 'updated' : 'created'}!`,
          action: (
            <Link href={'/movie-lists/' + upsertOneMovieList.id}>
              <ToastAction altText='View movie list'>View</ToastAction>
            </Link>
          )
        })
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: `Couldn't ${isUpdating ? 'update' : 'create'} movie list`
        })
      }
    })
  }

  return (
    <Card className={'h-full'}>
      <CardHeader>
        <CardTitle>Movie list</CardTitle>
        <CardDescription>
          {isUpdating ? 'Update' : 'Create'} movie list
        </CardDescription>
      </CardHeader>

      <Separator className={'mb-5'} />

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-wull space-y-6'
          >
            <div className={'grid grid-cols-2 gap-10 content-center mb-20'}>
              <div className={'flex flex-col gap-5'}>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>List name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={'Some movie list...'}
                          type={'string'}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='tags'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>List tags</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={'comma separated tags...'}
                          type={'string'}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.value)
                            setTags(e.target.value.split(' ') ?? [])
                          }}
                        />
                      </FormControl>
                      <FormMessage />

                      <div className='flex flex-row w-full flex-wrap flex-grow flex-shrink gap-2'>
                        {tags.map((tag, index) => (
                          <Badge key={index} className={'bg-slate-700'}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='content'>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={15}
                        autoComplete={'on'}
                        autoCorrect={'on'}
                        placeholder='Description of your movie list'
                        className={'h-full'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className={'mb-5'} />

            <div className={'flex flex-col gap-5'}>
              <div className='grid grid-cols-[40%_60%] gap-2'>
                <Popover open={isMoviesFound && movieSearch.length > 0}>
                  <PopoverTrigger autoFocus={false}>
                    <Button
                      variant={'outline'}
                      className='w-full'
                      autoFocus={false}
                      type={'button'}
                      disabled
                    >
                      Add movie
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='min-w-[500px] p-0'
                    autoFocus={false}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    <Command autoFocus={false}>
                      <CommandEmpty>No movie found</CommandEmpty>
                      <CommandList autoFocus={false}>
                        {(movieSearchData.searchMovies ?? []).map((movie) => {
                          const directors = movie.crewMembers?.filter(
                            (member) =>
                              member.movieCrewMemberType?.name === 'Director'
                          )
                          const isMoreThanOneDirector = directors?.length > 1

                          return (
                            <CommandItem
                              autoFocus={false}
                              key={movie.id}
                              value={movie.movieInfo?.title}
                              className={'flex flex-row gap-3'}
                              onSelect={(e) => {
                                setListMovieIds((prev) => [...prev, movie.id])
                              }}
                            >
                              {movie.movieInfo?.title}
                              <span>
                                {directors?.map((director, index) => {
                                  const isLast = index === directors?.length - 1

                                  return (
                                    <span
                                      className={
                                        'font-semibold text-xs underline underline-offset-2'
                                      }
                                    >
                                      {director.crewMember?.name}
                                      {isMoreThanOneDirector && !isLast
                                        ? ', '
                                        : ''}
                                    </span>
                                  )
                                })}
                              </span>
                              {dateFormatterYear(movie.movieInfo?.releaseDate)}
                            </CommandItem>
                          )
                        })}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Input
                  onChange={F.debounce(
                    (e) => setMovieSearch(e.target.value),
                    150
                  )}
                  placeholder={'Search for movie...'}
                ></Input>
              </div>

              <SelectedMovies
                movieIds={listMovieIds}
                setMovieIds={setListMovieIds}
              />
            </div>

            <Separator className={'mb-5'} />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function SelectedMovies({
  movieIds = [],
  setMovieIds
}: {
  movieIds?: string[]
  setMovieIds: Dispatch<SetStateAction<string[]>>
}) {
  const { data } = useGetSelectedMovieListMoviesSuspenseQuery({
    variables: { movieIds },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {data.movies.map((movie) => (
        <div key={movie.id} className={'flex flex-col gap-3'}>
          <MovieCard {...movie} />
          <Button
            variant={'destructive'}
            onClick={(_) =>
              setMovieIds((prev) => prev.filter((id) => id !== movie.id))
            }
          >
            <Minus />
          </Button>
        </div>
      ))}
    </div>
  )
}

const MinimalisticMovieSearchCardFragment = gql`
  fragment MinimalisticMovieSearchCardItem on Movie {
    id
    movieInfo {
      id
      title
      releaseDate
    }
    crewMembers {
      crewMember {
        id
        name
      }
      movieCrewMemberType {
        id
        name
      }
    }
  }
`
