import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
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
import React, { useEffect } from 'react'
import { gql } from '@apollo/client'
import { GetMovieGenreForUpdateQuery, useUpsertMovieGenreMutation } from '@/lib'
import { Option } from '@mobily/ts-belt'
import { isSome } from '@/lib/types'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { toast } from '@/components/ui/use-toast'

export const UpsertMovieGenre = gql`
  mutation UpsertMovieGenre(
    $data: GenreCreateInput!
    $updateData: GenreUpdateInput!
    $existingGenreId: String!
  ) {
    upsertOneGenre(
      where: { id: $existingGenreId }
      update: $updateData
      create: $data
    ) {
      id
    }
  }
`

const createMovieGenreSchema = z.object({
  name: z.string().min(3).max(255)
})

export function MovieGenreCreateForm({
  movieGenreToUpdate
}: {
  movieGenreToUpdate?: Option<GetMovieGenreForUpdateQuery['genre']>
}) {
  const form = useForm<z.infer<typeof createMovieGenreSchema>>({
    resolver: zodResolver(createMovieGenreSchema)
  })

  const isUpdating = isSome(movieGenreToUpdate)

  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user.role === 'ADMIN'

  useEffect(() => {
    form.reset({
      name: movieGenreToUpdate?.name ?? ''
    })
  }, [movieGenreToUpdate])

  const [upsertMovieGenre] = useUpsertMovieGenreMutation()

  async function onSubmit(values: z.infer<typeof createMovieGenreSchema>) {
    if (!isAdmin)
      return toast({
        title: 'You need to be an admin'
      })

    await upsertMovieGenre({
      variables: {
        existingGenreId: movieGenreToUpdate?.id ?? '',
        updateData: {
          name: { set: values.name }
        },
        data: {
          name: values.name
        }
      },
      onCompleted: ({ upsertOneGenre }) => {
        toast({
          title: `Movie genre ${isUpdating ? 'updated' : 'created'}!`
        })
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: `Couldn't ${isUpdating ? 'update' : 'create'} movie genre`
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Genre</CardTitle>
        <CardDescription>
          {isUpdating ? 'Update' : 'Create'} movie genre
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-wull space-y-6'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre name</FormLabel>
                  <FormControl>
                    <Input placeholder='some genre goes here...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
