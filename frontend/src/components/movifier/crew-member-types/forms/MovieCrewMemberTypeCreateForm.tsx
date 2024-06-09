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
import {
  GetMovieCrewMemberTypeForUpdateQuery,
  useUpsertMovieCrewMemberTypeMutation
} from '@/lib'
import { Option } from '@mobily/ts-belt'
import { isSome } from '@/lib/types'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { toast } from '@/components/ui/use-toast'

export const UpsertMovieCrewMemberType = gql`
  mutation UpsertMovieCrewMemberType(
    $data: MovieCrewMemberTypeCreateInput!
    $updateData: MovieCrewMemberTypeUpdateInput!
    $existingTypeId: String!
  ) {
    upsertOneMovieCrewMemberType(
      where: { id: $existingTypeId }
      update: $updateData
      create: $data
    ) {
      id
    }
  }
`

const createMovieCrewMemberTypeSchema = z.object({
  name: z.string().min(3).max(255)
})

export function MovieCrewMemberTypeCreateForm({
  movieCrewMemberTypeToUpdate
}: {
  movieCrewMemberTypeToUpdate?: Option<
    GetMovieCrewMemberTypeForUpdateQuery['movieCrewMemberType']
  >
}) {
  const form = useForm<z.infer<typeof createMovieCrewMemberTypeSchema>>({
    resolver: zodResolver(createMovieCrewMemberTypeSchema)
  })

  const isUpdating = isSome(movieCrewMemberTypeToUpdate)

  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user.role === 'ADMIN'

  useEffect(() => {
    form.reset({
      name: movieCrewMemberTypeToUpdate?.name ?? ''
    })
  }, [movieCrewMemberTypeToUpdate])

  const [upsertMovieCrewMemberType] = useUpsertMovieCrewMemberTypeMutation()

  async function onSubmit(
    values: z.infer<typeof createMovieCrewMemberTypeSchema>
  ) {
    if (!isAdmin)
      return toast({
        title: 'You need to be an admin'
      })

    await upsertMovieCrewMemberType({
      variables: {
        existingTypeId: movieCrewMemberTypeToUpdate?.id ?? '',
        updateData: {
          name: { set: values.name }
        },
        data: {
          name: values.name
        }
      },
      onCompleted: () => {
        toast({
          title: `Movie crew member type ${isUpdating ? 'updated' : 'created'}!`
        })
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: `Couldn't ${isUpdating ? 'update' : 'create'} movie crew member type`
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Movie crew member type</CardTitle>
        <CardDescription>
          {isUpdating ? 'Update' : 'Create'} movie crew member type
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
                  <FormLabel>Crew member type name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='some crew member type goes here...'
                      {...field}
                    />
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
