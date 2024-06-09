import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { cn, useUpsertMovieMutation } from '@/lib'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Imbue } from 'next/font/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { gql } from '@apollo/client'
import { MovieCreateFormSpokenLanguagesSelector } from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateFormSpokenLanguagesSelector'
import { MovieCreateFormGenresSelector } from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateFormPersonsSelector/MovieCreateFormGenresSelector'
import { Badge } from '@/components/ui/badge'
import { MovieCreateFormStudiosSelector } from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateFormStudiosSelector'
import {
  MoviePersonsSelection,
  PersonOnMovieType
} from '@/components/movifier/movies/forms/MovieCreateForm/types'
import { MovieCreateFormPersonsSelector } from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateFormPersonsSelector'
import { useMutative } from 'use-mutative'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { D, Option } from '@mobily/ts-belt'
import { Skeleton } from '@/components/ui/skeleton'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Link } from 'next-view-transitions'
import { ToastAction } from '@/components/ui/toast'

const imbue = Imbue({ subsets: ['latin'] })

export const UpsertMovie = gql`
  mutation UpsertMovie(
    $data: MovieCreateInput!
    $updateData: MovieUpdateInput!
    $existingMovieId: String!
  ) {
    upsertOneMovie(
      where: { id: $existingMovieId }
      create: $data
      update: $updateData
    ) {
      id
    }
  }
`

const createMovieSchema = z.object({
  title: z.string().min(3).max(300),
  description: z.string().min(3).max(3000),
  alternativeTitles: z.string().optional(),
  imdbId: z.string().regex(/tt\d{7,8}/),
  durationInMinutes: z.coerce.number().int().min(1).max(1000),
  releaseDate: z.date()
})

export default function MovieCreateForm() {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user.role === 'ADMIN'

  const form = useForm<z.infer<typeof createMovieSchema>>({
    resolver: zodResolver(createMovieSchema)
  })

  const isUpdating = false

  const [posterUrl, setPosterUrl] = useState<Option<string>>(null)
  const [alternativeTitles, setAlternativeTitles] = useState<string[]>([])
  const [spokenLanguagesIds, setSpokenLanguagesIds] = useState<string[]>([])
  const [genresIds, setGenresIds] = useState<string[]>([])
  const [studiosIds, setStudiosIds] = useState<string[]>([])
  const [crewMembers, setCrewMembers] = useMutative<MoviePersonsSelection[]>([])

  const [upsertMovie] = useUpsertMovieMutation()

  async function onSubmit(values: z.infer<typeof createMovieSchema>) {
    if (!isAdmin)
      return toast({
        title: 'You need to be signed in and be an adming'
      })

    if (spokenLanguagesIds.length <= 0)
      return toast({
        title: 'No languages selected'
      })
    if (genresIds.length <= 0)
      return toast({
        title: 'No genres selected'
      })
    if (studiosIds.length <= 0)
      return toast({
        title: 'No studios selected'
      })
    if (crewMembers.length <= 0)
      return toast({
        title: 'No crew members selected'
      })

    const crewMembersTransformed = crewMembers
      .map((member) =>
        member.personOnMovieRoles.reduce<
          [MoviePersonsSelection, PersonOnMovieType][]
        >((acc, curr) => {
          return [...acc, [member, curr]]
        }, [])
      )
      .flat()

    await upsertMovie({
      variables: {
        existingMovieId: '',
        data: {
          genres: {
            connect: genresIds.map((id) => ({ id }))
          },
          studios: {
            connect: studiosIds.map((id) => ({ id }))
          },
          crewMembers: {
            create: crewMembersTransformed.map(([member, role]) => ({
              crewMember: {
                connect: { id: member.movieCrewMemberId }
              },
              movieCrewMemberType: {
                connect: { id: role.id }
              }
            }))
          },
          movieInfo: {
            create: {
              ...D.deleteKeys(values, ['alternativeTitles']),
              posterUrl: posterUrl ?? '',
              alternativeTitles: {
                set: alternativeTitles
              }
            }
          }
        },
        updateData: {
          genres: {
            connect: genresIds.map((id) => ({ id }))
          },
          studios: {
            connect: studiosIds.map((id) => ({ id }))
          },
          crewMembers: {
            create: crewMembersTransformed.map(([member, role]) => ({
              crewMember: {
                connect: { id: member.movieCrewMemberId }
              },
              movieCrewMemberType: {
                connect: { id: role.id }
              }
            }))
          },
          movieInfo: {
            create: {
              ...D.deleteKeys(values, ['alternativeTitles']),
              posterUrl: posterUrl ?? '',
              alternativeTitles: {
                set: alternativeTitles
              }
            }
          }
        }
      },
      onCompleted: ({ upsertOneMovie }) => {
        toast({
          title: `Movie ${isUpdating ? 'updated' : 'created'}!`,
          action: (
            <Link href={'/movies/' + upsertOneMovie.id}>
              <ToastAction altText='View movie'>View</ToastAction>
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
    <div className={'h-[120vh] w-full pt-5 pb-5'}>
      <div className={'h-full'}>
        <div className='relative h-full mb-10 grid grid-cols-[25%_75%] mx-auto gap-4 w-auto justify-start align-top'>
          {/*<MoviePagePoster {...movie} />*/}
          <MoviePagePosterForm
            posterUrl={posterUrl}
            setPosterUrl={setPosterUrl}
          />
          {/*<p>poster</p>*/}

          <Card className={'h-full'}>
            <CardHeader>
              <CardTitle>Movie</CardTitle>
              <CardDescription>
                {isUpdating ? 'Update' : 'Create'} movie
              </CardDescription>
            </CardHeader>

            <Separator className={'mb-5'} />

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='w-wull space-y-6'
                >
                  <div
                    className={'grid grid-cols-2 gap-10 content-center mb-20'}
                  >
                    <div className={'flex flex-col gap-5'}>
                      <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Movie title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'Some movie title...'}
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
                        name='durationInMinutes'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Movie duration</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'Duration of movie in minutes...'}
                                type={'number'}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='imdbId'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>IMDB ID</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'IMDB ID of the movie...'}
                                type={'string'}
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              IMDB ID of the movie
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='releaseDate'
                        render={({ field }) => (
                          <FormItem className={'flex flex-col'}>
                            <FormLabel>Release date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={'outline'}
                                    className={cn(
                                      'w-[240px] pl-3 text-left font-normal',
                                      !field.value && 'text-muted-foreground'
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, 'PPP')
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className='w-auto p-0'
                                align='start'
                              >
                                <Calendar
                                  mode='single'
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date('2100-01-01') ||
                                    date < new Date('1900-01-01')
                                  }
                                  fromYear={1900}
                                  toYear={2100}
                                  captionLayout='dropdown-buttons'
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='alternativeTitles'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Alternative titles</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={
                                  'comma, separated, list, of, titles...'
                                }
                                type={'string'}
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e.target.value)
                                  setAlternativeTitles(
                                    e.target.value.split(',') ?? []
                                  )
                                }}
                              />
                            </FormControl>
                            <FormMessage />

                            <div className='flex flex-row w-full flex-wrap flex-grow flex-shrink gap-2'>
                              {alternativeTitles.map((tag, index) => (
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
                          <FormLabel htmlFor='description'>
                            Description
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={15}
                              autoComplete={'on'}
                              autoCorrect={'on'}
                              placeholder='Description of the movie'
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

                  <MovieCreateFormSpokenLanguagesSelector
                    spokenLanguagesIds={spokenLanguagesIds}
                    setSpokenLanguagesIds={setSpokenLanguagesIds}
                  />

                  <Separator className={'mb-5'} />

                  <MovieCreateFormGenresSelector
                    genresIds={genresIds}
                    setGenresIds={setGenresIds}
                  />

                  <Separator className={'mb-5'} />

                  <MovieCreateFormStudiosSelector
                    studiosIds={studiosIds}
                    setStudiosIds={setStudiosIds}
                  />

                  <Separator className={'mb-5'} />

                  <MovieCreateFormPersonsSelector
                    crewMembers={crewMembers}
                    setCrewMembers={setCrewMembers}
                  />

                  <Separator className={'mb-5'} />

                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function MoviePagePosterForm({
  posterUrl,
  setPosterUrl
}: {
  posterUrl: Option<string>
  setPosterUrl: Dispatch<SetStateAction<Option<string>>>
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isSome(posterUrl) ? (
          <motion.img
            src={posterUrl ?? ''}
            className={
              'w-auto justify-self-end align-top rounded-lg max-w-full sticky top-5 overflow-hidden shadow-2xl drop-shadow-lg'
            }
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            transition={{ type: 'spring', duration: 0.8 }}
          ></motion.img>
        ) : (
          <motion.div
            className='bg-cover overflow-hidden'
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <Skeleton className={'w-[500px] h-[700px]'} />
          </motion.div>
        )}
      </DialogTrigger>

      <DialogContent className='border-0'>
        <DialogHeader>
          <DialogTitle>Movie poster</DialogTitle>
          <DialogDescription>Create movie poster</DialogDescription>
        </DialogHeader>

        <Input
          value={posterUrl ?? ''}
          onChange={(e) => setPosterUrl(e.target.value)}
          placeholder={'Specify poster url'}
        ></Input>
      </DialogContent>
    </Dialog>
  )
}
