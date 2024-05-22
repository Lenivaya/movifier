import { gql } from '@apollo/client'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUserMutation } from '@/lib'
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

export const REGISTER_USER = gql`
  mutation RegisterUser($data: MovifierAppUserCreateInput!) {
    createOneMovifierAppUser(data: $data) {
      token
      user {
        ...CurrentUser
      }
    }
  }
`
const registerUserSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1).toLowerCase(),
  email: z.string().email(),
  password: z.string().min(8)
})
export const RegisterUserForm: FC = () => {
  const form = useForm<z.infer<typeof registerUserSchema>>({
    resolver: zodResolver(registerUserSchema)
  })

  const [register, { error, loading }] = useRegisterUserMutation()
  const setUser = useSetUser()

  async function onSubmit(values: z.infer<typeof registerUserSchema>) {
    await register({
      variables: { data: values },
      onCompleted: async (data) => {
        if (error || isNone(data.createOneMovifierAppUser)) {
          console.error(error)
          return
        }

        await setUser(data.createOneMovifierAppUser.token)
        toast({
          title: 'Registered',
          description: 'You have been registered and logged in.'
        })
      },
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error registering',
          description: 'Registration failed. Please try again.'
        })
      },
      update: (cache, { data }) => {
        if (isNone(data?.createOneMovifierAppUser)) return

        cache.writeQuery({
          query: GET_CURRENT_USER,
          data: {
            me: data!.createOneMovifierAppUser.user
          }
        })
      }
    })
  }

  if (loading) return <AppLoader />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register new movifier account</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-wull space-y-6'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'John Doe'}
                      type={'string'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder={'johndoe'} type={'string'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
