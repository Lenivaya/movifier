import { gql, useApolloClient } from '@apollo/client'
import { MovifierAppUser, useGetCurrentUserQuery } from '@/lib/'
import { O } from '@mobily/ts-belt'
import { useRouter } from 'next/navigation'
import { JSX } from 'react/jsx-runtime'
import IntrinsicAttributes = JSX.IntrinsicAttributes
import { ComponentType, ReactElement } from 'react'

export const GET_CURRENT_USER = gql`
  fragment CurrentUser on MovifierAppUser {
    id
    role
    name
  }

  query GetCurrentUser {
    me {
      ...CurrentUser
    }
  }
`

export const useCurrentUser = () => {
  const { data } = useGetCurrentUserQuery()
  return data?.me
}

export const useIsSignedIn = () => {
  const user = useCurrentUser()
  return O.isSome(user)
}

export const useLogout = () => {
  const client = useApolloClient()
  return async () => {
    localStorage.removeItem('auth:token')
    await client.resetStore()
  }
}

export const useRedirectToRegister = () => {
  const signedIn = useIsSignedIn()
  const router = useRouter()

  return {
    signedIn,
    redirect: () => router.push('/')
  }
}

export const useSetUser = () => {
  const router = useRouter()
  const client = useApolloClient()

  return async (token: string | undefined | null) => {
    localStorage.setItem('auth:token', token || '')
    router.push('/')
    await client.refetchQueries({
      include: [GET_CURRENT_USER]
    })
  }
}

const useIsUserHaveRole = (expectedRole: MovifierAppUser['role']) => {
  const user = useCurrentUser()
  return O.isSome(user) && user?.role === expectedRole
}

export const useIsRegularUser = () => useIsUserHaveRole('USER')
export const useIsAdmin = () => useIsUserHaveRole('ADMIN')

const withSignInUserRoleCheck =
  (userRoleCheckFunc: () => boolean = () => true) =>
  <P extends IntrinsicAttributes>(WrappedComponent: ComponentType<P>) =>
  // eslint-disable-next-line react/display-name
  (props: P): ReactElement => {
    const { signedIn, redirect } = useRedirectToRegister()
    const isExpectedUserRole = userRoleCheckFunc()

    if (!signedIn || !isExpectedUserRole) {
      return (
        <div className='flex min-h-[84vh] justify-center p-10'>
          <h1 className='mx-auto my-auto text-center text-lg font-bold text-black dark:text-white'>
            Not authorized
          </h1>
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }

export const withSignInCheck = withSignInUserRoleCheck()
export const withSignInAdminCheck = withSignInUserRoleCheck(useIsAdmin)
export const withSignInRegularUserCheck =
  withSignInUserRoleCheck(useIsRegularUser)
