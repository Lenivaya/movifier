import { gql } from '@apollo/client'
import { PersonPagePosterItemFragment } from '@/lib'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import React from 'react'

export const PersonPagePosterFragment = gql`
  fragment PersonPagePosterItem on MovieCrewMember {
    photoUrl
    name
  }
`

export function PersonPagePoster({
  photoUrl,
  name
}: PersonPagePosterItemFragment) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.img
          src={photoUrl}
          alt={name}
          className={
            'w-auto justify-self-end align-top rounded-lg max-w-full overflow-hidden shadow-2xl drop-shadow-lg'
          }
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
          transition={{ type: 'spring', duration: 0.8 }}
        ></motion.img>
      </DialogTrigger>

      <DialogContent className='bg-transparent border-0'>
        <motion.img
          src={photoUrl}
          alt={name}
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
