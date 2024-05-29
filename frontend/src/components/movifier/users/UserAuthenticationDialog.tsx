import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoginUserForm } from '@/components/movifier/users/forms/LoginUserForm'
import { RegisterUserForm } from '@/components/movifier/users/forms/RegisterUserForm'
import React, { FC, ReactNode } from 'react'

export const UserAuthenticationDialog: FC<{
  children: ReactNode
}> = ({ children }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className=''>
      <DialogHeader>
        <DialogTitle>Login / Register</DialogTitle>
        <DialogDescription>
          Login or register to access your account.
        </DialogDescription>
      </DialogHeader>

      <Tabs defaultValue='account' className='w-[400px] mx-auto'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='register'>Register</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <LoginUserForm />
        </TabsContent>
        <TabsContent value='register'>
          <RegisterUserForm />
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
)
