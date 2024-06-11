import { gql } from '@apollo/client'
import { useDeleteMovieCrewMemberTypeMutation } from '@/lib'
import * as React from 'react'
import { useCallback, useState } from 'react'
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

export const DeleteMovieCrewMemberType = gql`
  mutation DeleteMovieCrewMemberType($id: String!) {
    deleteOneMovieCrewMemberType(where: { id: $id }) {
      id
    }
  }
`

export function DeleteMovieCrewMemberTypeButton({ id }: { id: string }) {
  const [deleteMovieCrewMemberType] = useDeleteMovieCrewMemberTypeMutation()
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  async function handleDelete() {
    await deleteMovieCrewMemberType({
      variables: {
        id
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error deleting movie crew member type'
        })
      },
      onCompleted: () => {
        toast({
          title: 'Movie crew member type deleted'
        })
      },
      update: (cache, { data, errors }) => {
        return apolloObjectRemover(
          cache,
          data?.deleteOneMovieCrewMemberType,
          errors
        )
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
          <DialogTitle>Delete movie crew member type</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this movie crew member type?
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
