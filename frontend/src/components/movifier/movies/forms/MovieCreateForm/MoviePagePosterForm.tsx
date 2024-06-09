import { Option } from '@mobily/ts-belt'
import React, { Dispatch, SetStateAction } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { isSome } from '@/lib/types'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from '@/components/ui/input'

export function MoviePagePosterForm({
  posterUrl,
  setPosterUrl
}: {
  posterUrl: Option<string>
  setPosterUrl: Dispatch<SetStateAction<Option<string>>>
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isSome(posterUrl) ? (
          <motion.img
            src={posterUrl ?? ''}
            className={
              'w-auto justify-self-end align-top rounded-lg max-w-full sticky top-5 overflow-hidden shadow-2xl drop-shadow-lg'
            }
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            transition={{ type: 'spring', duration: 0.8 }}
          ></motion.img>
        ) : (
          <motion.div
            className='bg-cover overflow-hidden'
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <Skeleton className={'w-[500px] h-[700px]'} />
          </motion.div>
        )}
      </DialogTrigger>

      <DialogContent className='border-0'>
        <DialogHeader>
          <DialogTitle>Movie poster</DialogTitle>
          <DialogDescription>Create movie poster</DialogDescription>
        </DialogHeader>

        <Input
          value={posterUrl ?? ''}
          onChange={(e) => setPosterUrl(e.target.value)}
          placeholder={'Specify poster url'}
        ></Input>
      </DialogContent>
    </Dialog>
  )
}
