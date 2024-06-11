import { useDeleteMovieMutation, useDeletePersonMutation } from '@/lib'
import React, { useCallback, useState } from 'react'
import { useIsAdmin } from '@/lib/hooks/CurrentUser'
import { toast } from '@/components/ui/use-toast'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui'
import { gql } from '@apollo/client'
import { AppTooltip } from '@/components/movifier/generic'

export const DeleteMovie = gql`
  mutation DeleteMovie($id: String!) {
    deleteOneMovie(where: { id: $id }) {
      id
    }
  }
`

export function DeleteMovieButton({ id }: { id: string }) {
  const [deleteMovie] = useDeleteMovieMutation()
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  const isAdmin = useIsAdmin()

  async function handleDelete() {
    if (!isAdmin)
      return toast({
        title: 'You are not authorized to delete movies'
      })

    await deleteMovie({
      variables: {
        id
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error deleting movie'
        })
      },
      onCompleted: () => {
        toast({
          title: 'Movie deleted'
        })
      },
      update: (cache, { data, errors }) => {
        return apolloObjectRemover(cache, data?.deleteOneMovie, errors)
      }
    })
  }

  const onDeleteHandler = useCallback(
    async (_event: React.MouseEvent<HTMLButtonElement>) => {
      await handleDelete()
      setIsDialogOpened((prev) => !prev)
    },
    []
  )

  return (
    <Dialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
      <DialogTrigger asChild>
        <Trash className={'cursor-pointer'} />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Delete movie</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this movie?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className={'flex w-full'}>
          <Button onClick={(_) => setIsDialogOpened((prev) => !prev)}>
            Cancel
          </Button>
          <Button
            variant={'destructive'}
            type='submit'
            onClick={onDeleteHandler}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
