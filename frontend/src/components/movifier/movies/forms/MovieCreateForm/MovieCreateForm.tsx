import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { MoviePagePosterItemFragment } from '@/lib'
import React, { FC, useState } from 'react'
import { Imbue } from 'next/font/google'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
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
import { MovieCreateFormGenresSelector } from '@/components/movifier/movies/forms/MovieCreateForm/MovieCreateFormGenresSelector'
import { Badge } from '@/components/ui/badge'

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
  durationInMinutes: z.number().int().min(1).max(1000)
})

export default function MovieCreateForm() {
  const form = useForm<z.infer<typeof createMovieSchema>>({
    resolver: zodResolver(createMovieSchema)
  })

  const isUpdating = false

  const [alternativeTitles, setAlternativeTitles] = useState<string[]>([])
  const [spokenLanguagesIds, setSpokenLanguagesIds] = useState<string[]>([])
  const [genresIds, setGenresIds] = useState<string[]>([])

  async function onSubmit(values: z.infer<typeof createMovieSchema>) {}

  return (
    <div className={'h-[120vh] w-full pt-5 pb-5'}>
      <div className={'h-full'}>
        <div className='relative h-full mb-10 grid grid-cols-[25%_75%] mx-auto gap-4 w-auto justify-start align-top'>
          {/*<MoviePagePoster {...movie} />*/}
          {/*<PosterSkeleton />*/}
          <p>poster</p>
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

// type MoviePagePosterFormProps = {
//   poster
// }

export const MoviePagePosterForm: FC<MoviePagePosterItemFragment> = ({
  movieInfo
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.img
          src={movieInfo?.posterUrl}
          className={
            'w-auto justify-self-end align-top rounded-lg max-w-full sticky top-5 overflow-hidden shadow-2xl drop-shadow-lg'
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          transition={{ type: 'spring', duration: 0.8 }}
        ></motion.img>
      </DialogTrigger>

      <DialogContent className='bg-transparent border-0'>
        <motion.img
          src={movieInfo?.posterUrl}
          alt={movieInfo?.title}
          className={
            'w-auto h-full rounded-lg max-w-full object-contain mx-auto'
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          transition={{ type: 'spring', duration: 0.8 }}
        />
      </DialogContent>
    </Dialog>
  )
}
