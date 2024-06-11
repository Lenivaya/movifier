import { Option } from '@mobily/ts-belt'
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { isNone, isSome } from '@/lib/types'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui'

type ImgPushResponse = {
  filename: string
}

interface ImageUploaderImageSize {
  width: number
  height: number
}

export function ImageUploader({
  imageUrl,
  setImageUrl,
  imageSize = { width: 500, height: 750 }
}: {
  imageUrl: Option<string>
  setImageUrl: Dispatch<SetStateAction<Option<string>>>
  imageSize?: ImageUploaderImageSize
}) {
  const [selectedImage, setSelectedImage] = useState<Option<File>>(null)

  const onPictureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isNone(event.target.files)) return
      const file = event.target.files[0]

      if (!file.type.match('image/*')) {
        alert('Please select an image file.')
        return
      }

      setSelectedImage(file)
    },
    []
  )
  const onUploadClick = useCallback(
    async (_event: React.MouseEvent<HTMLButtonElement>) => {
      if (isNone(selectedImage)) return

      const formData = new FormData()
      formData.append('file', selectedImage)

      try {
        const response = await axios.post<ImgPushResponse>(
          process.env.NEXT_PUBLIC_IMGPUSH_URL ?? '',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        const { data } = response
        const imgUrl =
          process.env.NEXT_PUBLIC_IMGPUSH_URL! +
          (isSome(imageSize)
            ? `${data.filename}?w=${imageSize.width}&h=${imageSize.height}`
            : `/${data.filename}`)

        setImageUrl(imgUrl)
        toast({
          title: 'Image successfully uploaded'
        })
      } catch (error) {
        console.error('Error uploading image:', error)
        toast({ title: 'Error uploading image' })
      }
    },
    [selectedImage, setImageUrl, imageSize]
  )

  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='picture'>Picture</Label>
      <Input id='picture' type='file' onChange={onPictureChange} />
      {selectedImage && (
        <div className='image-preview'>
          <img src={URL.createObjectURL(selectedImage)} alt='Selected Image' />
        </div>
      )}
      <Button onClick={onUploadClick}>Upload</Button>
    </div>
  )
}
