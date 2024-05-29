import { gql } from '@apollo/client'
import { FC } from 'react'
import { MoviePagePosterItemFragment } from '@/lib'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

export const MoviePagePosterFragment = gql`
  fragment MoviePagePosterItem on Movie {
    movieInfo {
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
        <motion.img
          src={movieInfo?.posterUrl}
          alt={movieInfo?.title}
          className={
            'w-[230px] h-[345px] justify-self-end rounded-lg max-w-full object-scale-down sticky top-5 overflow-hidden'
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          transition={{ type: 'spring', duration: 0.8 }}
        />
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
