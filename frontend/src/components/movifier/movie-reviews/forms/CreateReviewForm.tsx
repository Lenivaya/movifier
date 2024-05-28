import { gql } from '@apollo/client'
import { z } from 'zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useGetMovieRatingReviewQuery,
  useUpsertMovieRatingReviewMutation
} from '@/lib'
import { toast } from '@/components/ui/use-toast'
import { AppLoader } from '@/components/movifier/generic'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui'

export const GET_MOVIE_RATING_REVIEW_BY = gql`
  query GetMovieRatingReview($ratingId: String!) {
    movieReview(where: { ratingId: $ratingId }) {
      id
      content
    }
  }
`

export const UPSERT_MOVIE_RATING_REVIEW = gql`
  mutation UpsertMovieRatingReview($ratingId: String!, $content: String!) {
    upsertOneMovieReview(
      where: { ratingId: $ratingId }
      update: { content: { set: $content } }
      create: { rating: { connect: { id: $ratingId } }, content: $content }
    ) {
      id
      content
    }
  }
`
const createReviewSchema = z.object({
  content: z.string().min(3)
})
export const CreateReviewForm: FC<{ ratingId: string }> = ({ ratingId }) => {
  const form = useForm<z.infer<typeof createReviewSchema>>({
    resolver: zodResolver(createReviewSchema)
  })

  useGetMovieRatingReviewQuery({
    variables: { ratingId: ratingId ?? '' },
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ movieReview }) => {
      if (!movieReview) return
      form.setValue('content', movieReview.content)
    }
  })

  const [upsertMovieReview, { loading }] = useUpsertMovieRatingReviewMutation()

  async function onSubmit(values: z.infer<typeof createReviewSchema>) {
    await upsertMovieReview({
      variables: { ratingId, ...values },
      onCompleted: () => {
        toast({
          title: 'Review saved'
        })
      },
      onError: (error) => {
        toast({
          title: 'Error saving review'
        })
        console.error(error)
      }
    })
  }

  if (loading) return <AppLoader />

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-wull h-full space-y-6'
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='content'>Review</FormLabel>
              <FormControl>
                <Textarea
                  rows={15}
                  autoComplete={'on'}
                  autoCorrect={'on'}
                  placeholder='Your movie review...'
                  className={'h-full'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Create</Button>
      </form>
    </Form>
  )
}
