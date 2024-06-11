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
  GetPersonForUpdateQuery,
  useGetPersonForUpdateQuery,
  useUpsertPersonMutation
} from '@/lib'
import React, { FC, useEffect, useState } from 'react'
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
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isNone, isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { Option } from '@mobily/ts-belt'
import { Link } from 'next-view-transitions'
import { ToastAction } from '@/components/ui/toast'
import { MoviePagePosterForm } from '@/components/movifier/movies/forms/MovieCreateForm/MoviePagePosterForm'

export const UpsertPerson = gql`
  mutation UpsertPerson(
    $data: MovieCrewMemberCreateInput!
    $updateData: MovieCrewMemberUpdateInput!
    $existingId: String!
  ) {
    upsertOneMovieCrewMember(
      where: { id: $existingId }
      create: $data
      update: $updateData
    ) {
      id
    }
  }
`

const createPersonSchema = z.object({
  name: z.string().min(3).max(300),
  description: z.string().min(3).max(3000),
  alternativeTitles: z.string().optional(),
  imdbId: z.string().regex(/tt\d{7,8}/),
  popularity: z.preprocess(
    (a) => parseFloat(z.string().parse(a)),
    z
      .number({
        invalid_type_error: 'Price must be Number'
      })
      .min(0)
      .max(100)
  )
})

export default function PersonCreateForm({
  personToUpdate
}: {
  personToUpdate?: Option<GetPersonForUpdateQuery['movieCrewMember']>
}) {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user.role === 'ADMIN'

  const form = useForm<z.infer<typeof createPersonSchema>>({
    resolver: zodResolver(createPersonSchema)
  })

  const isUpdating = isSome(personToUpdate)

  const [photoUrl, setPhotoUrl] = useState<Option<string>>(null)

  const [upsertPerson] = useUpsertPersonMutation()

  useEffect(() => {
    form.reset({
      name: personToUpdate?.name ?? '',
      description: personToUpdate?.description ?? '',
      imdbId: personToUpdate?.imdbId ?? '',
      popularity: personToUpdate?.popularity ?? 0
    })
    setPhotoUrl(personToUpdate?.photoUrl ?? null)
  }, [personToUpdate])

  async function onSubmit(values: z.infer<typeof createPersonSchema>) {
    if (!isAdmin)
      return toast({
        title: 'You need to be signed in and be an admin'
      })

    if (isNone(photoUrl))
      return toast({
        title: 'No photo selected'
      })

    await upsertPerson({
      variables: {
        existingId: personToUpdate?.id ?? '',
        data: {
          ...values,
          photoUrl
        },
        updateData: {
          name: {
            set: values.name
          },
          description: {
            set: values.description
          },
          popularity: {
            set: values.popularity
          },
          imdbId: {
            set: values.imdbId
          }
        }
      },
      onCompleted: ({ upsertOneMovieCrewMember }) => {
        toast({
          title: `Person ${isUpdating ? 'updated' : 'created'}!`,
          action: (
            <Link href={'/persons/' + upsertOneMovieCrewMember.id}>
              <ToastAction altText='View person'>View</ToastAction>
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
          <MoviePagePosterForm
            posterUrl={photoUrl}
            setPosterUrl={setPhotoUrl}
          />

          <Card className={'h-full'}>
            <CardHeader>
              <CardTitle>Person</CardTitle>
              <CardDescription>
                {isUpdating ? 'Update' : 'Create'} person
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
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Person name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={'Some person name...'}
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
                        name='popularity'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Person popularity</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={
                                  'Person popularity in range 0 - 100'
                                }
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
                                placeholder={'IMDB ID of the person...'}
                                type={'string'}
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              IMDB ID of the person
                            </FormDescription>
                            <FormMessage />
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
                              placeholder='Description of the person'
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

const GetPersonForUpdate = gql`
  query GetPersonForUpdate($id: String!) {
    movieCrewMember(where: { id: $id }) {
      id
      name
      photoUrl
      description
      popularity
      imdbId
    }
  }
`

export const PersonUpdateForm: FC<{ personId: string }> = ({ personId }) => {
  const { data } = useGetPersonForUpdateQuery({
    variables: { id: personId },
    fetchPolicy: 'network-only'
  })

  return PersonCreateForm({ personToUpdate: data?.movieCrewMember })
}
