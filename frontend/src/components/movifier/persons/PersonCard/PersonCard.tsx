import { gql } from '@apollo/client'
import { FC, HTMLAttributes } from 'react'
import { cn, PersonCardItemFragment } from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'

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
      <Link href={`/persons/${id}`} passHref>
        <Card className={''}>
          <CardHeader className={'!m-0 p-0 hover:shadow-lg relative'}>
            <img
              src={photoUrl ?? ''}
              alt={name ?? ''}
              className='object-fill w-full'
              onError={(e) => {
                e.currentTarget.src = fallbackImageUrl
              }}
            ></img>
          </CardHeader>

          <Separator orientation={'horizontal'} className={'mb-5'} />

          <CardContent>
            <CardTitle className={'text-center'}>{name}</CardTitle>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
