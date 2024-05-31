import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { gql } from '@apollo/client'
import { MovieCardItemFragment } from '@/lib/graphql/__generated__'
import { Separator } from '@/components/ui'
import { Link } from 'next-view-transitions'

export const MovieCardFragment = gql`
  fragment MovieCardItem on Movie {
    id

    movieInfo {
      id
      title
      posterUrl
    }
  }
`

export const MovieCard: FC<MovieCardItemFragment> = ({ movieInfo, id }) => {
  return (
    <Link href={`/movies/${id}`}>
      <motion.div
        className='flex flex-col justify-between max-w-64 w-64 max-h-full relative'
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 }
        }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <Card>
          <CardHeader className={'!m-0 p-0 hover:shadow-lg'}>
            <img
              src={movieInfo?.posterUrl ?? ''}
              width={300}
              height={300}
              alt={movieInfo?.title ?? ''}
            ></img>
          </CardHeader>

          <Separator orientation={'horizontal'} className={'mb-5'} />

          <CardContent>
            <CardTitle className={'text-center'}>{movieInfo?.title}</CardTitle>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}
