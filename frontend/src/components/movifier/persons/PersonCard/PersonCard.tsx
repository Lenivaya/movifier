import { gql } from '@apollo/client'
import React, { FC, HTMLAttributes, useCallback, useState } from 'react'
import { cn, PersonCardItemFragment, useDeletePersonMutation } from '@/lib'
import { useCurrentUser, useIsAdmin } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { AppTooltip } from '@/components/movifier/generic'
import { FilePenLine, Trash } from 'lucide-react'
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

export const PersonCardFragment = gql`
  fragment PersonCardItem on MovieCrewMember {
    id
    name
    photoUrl
  }
`

const fallbackImageUrl =
  'https://www.lighting.philips.com.sg/content/dam/b2b-philips-lighting/ecat-fallback.png?wid=93&hei=93&qlt=82' // Replace with your actual fallback image URL

export const PersonCard: FC<
  PersonCardItemFragment & HTMLAttributes<HTMLDivElement>
> = ({ className, id, name, photoUrl }) => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user?.role === 'ADMIN'

  return (
    <motion.div
      className={cn(
        'flex flex-col justify-between max-w-52 w-52 relative group',
        className
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
      transition={{ type: 'spring', duration: 0.8 }}
    >
      <Card className={''}>
        <CardHeader className={'!m-0 p-0 hover:shadow-lg relative'}>
          <Link href={`/persons/${id}`} passHref>
            <img
              src={photoUrl ?? ''}
              alt={name ?? ''}
              className='object-fill w-full'
              onError={(e) => {
                e.currentTarget.src = fallbackImageUrl
              }}
            ></img>
          </Link>
        </CardHeader>

        <Separator orientation={'horizontal'} className={'mb-5'} />

        <CardContent>
          <CardTitle className={'text-center'}>{name}</CardTitle>
        </CardContent>

        <CardFooter>
          {isAdmin && (
            <div className={'grid grid-cols-2 mx-auto gap-5'}>
              <Link
                href={`/persons/${id}/edit`}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <AppTooltip text={'Edit person'}>
                  <FilePenLine />
                </AppTooltip>
              </Link>

              <DeletePersonButton id={id} />
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export const DeletePerson = gql`
  mutation DeletePerson($id: String!) {
    deleteOneMovieCrewMember(where: { id: $id }) {
      id
    }
  }
`

export function DeletePersonButton({ id }: { id: string }) {
  const [deleteMovie] = useDeletePersonMutation()
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  const isAdmin = useIsAdmin()

  async function handleDelete() {
    if (!isAdmin)
      return toast({
        title: 'You are not authorized to delete persons'
      })

    await deleteMovie({
      variables: {
        id
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error deleting person'
        })
      },
      onCompleted: () => {
        toast({
          title: 'Person deleted'
        })
      },
      update: (cache, { data, errors }) => {
        return apolloObjectRemover(
          cache,
          data?.deleteOneMovieCrewMember,
          errors
        )
      }
    })
  }

  const onDeleteHandler = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
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
          <DialogTitle>Delete person</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this person?
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
