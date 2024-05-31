import { gql } from '@apollo/client'
import { FC } from 'react'
import { MoviePagePosterItemFragment } from '@/lib'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

export const MoviePagePosterFragment = gql`
  fragment MoviePagePosterItem on Movie {
    movieInfo {
      id
      posterUrl
      title
    }
  }
`

export const MoviePagePoster: FC<MoviePagePosterItemFragment> = ({
  movieInfo
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className={
            'w-auto h-[400px] justify-self-end align-top rounded-lg max-w-full sticky top-5 overflow-hidden'
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          transition={{ type: 'spring', duration: 0.8 }}
        >
          <img
            src={movieInfo?.posterUrl}
            alt={movieInfo?.title}
            className='object-scale-down rounded-lg w-full'
          />
        </motion.div>
      </DialogTrigger>

      <DialogContent className='bg-transparent border-0 shadow-none drop-shadow-none'>
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
