import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUserMutation } from '@/lib'
import { GET_CURRENT_USER, useSetUser } from '@/lib/hooks/CurrentUser'
import { isNone } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { AppLoader } from '@/components/movifier/generic'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation LoginUser($data: UserLoginInput!) {
    loginUser(data: $data) {
      token
      user {
        ...CurrentUser
      }
    }
  }
`
const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})

export const LoginUserForm: FC = () => {
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema)
  })

  const [login, { error, loading }] = useLoginUserMutation()
  const setUser = useSetUser()

  async function onSubmit(values: z.infer<typeof loginUserSchema>) {
    await login({
      variables: { data: values },
      onCompleted: async (data) => {
        if (error || isNone(data.loginUser)) {
          console.error(error)
          return
        }

        await setUser(data.loginUser.token)
        toast({
          title: 'Logged in',
          description: 'You have been logged in.'
        })
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error logging in',
          description: 'Login failed. Please try again.'
        })
      },
      update: (cache, { data }) => {
        if (isNone(data?.loginUser)) return

        cache.writeQuery({
          query: GET_CURRENT_USER,
          data: {
            me: data!.loginUser.user
          }
        })
      }
    })
  }

  if (loading) return <AppLoader />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to access your account.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-wull space-y-6'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='example@gmail.com'
                      type={'email'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={'password'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
