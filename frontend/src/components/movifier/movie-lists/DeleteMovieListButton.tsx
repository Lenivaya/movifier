import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useDeleteMovieListMutation } from '@/lib'
import { toast } from '@/components/ui/use-toast'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'
import { Trash } from 'lucide-react'
import { gql } from '@apollo/client'
import { Button } from '@/components/ui'
import React, { useCallback, useState } from 'react'

export const DELETE_MOVIE_LIST = gql`
  mutation DeleteMovieList($id: String!) {
    deleteOneMovieList(where: { id: $id }) {
      id
    }
  }
`

export function DeleteMovieListButton({ id }: { id: string }) {
  const [deleteMovieList] = useDeleteMovieListMutation()
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  async function handleDelete() {
    await deleteMovieList({
      variables: {
        id
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error deleting movie list'
        })
      },
      onCompleted: () => {
        toast({
          title: 'Movie list deleted'
        })
      },
      update: (cache, { data, errors }) => {
        return apolloObjectRemover(cache, data?.deleteOneMovieList, errors)
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
          <DialogTitle>Delete movie list</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this movie list?
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
