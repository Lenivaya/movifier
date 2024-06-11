import { FC } from 'react'
import { NavbarHeader } from '@/components/movifier/layout/navbar/NavbarHeader'
import { NavbarNavigationMenu } from '@/components/movifier/layout/navbar/NavbarNavigation'
import { NavbarUser } from '@/components/movifier/layout/navbar/NavbarUser'
// import { HeaderMenuWithPopover } from '@/components/movifier/layout/navbar/HeaderMenuWithPopover'

export const Navbar: FC = () => {
  return (
    <div className='sticky top-0 z-40 w-full flex-none bg-white/95 transition-colors duration-500 dark:bg-neutral-900/70 lg:border-b lg:border-slate-900/10'>
      <div className='max-w-8xl mx-auto'>
        <div className='mx-4 border-b border-slate-900/10 py-4 lg:mx-0 lg:border-0 lg:px-8'>
          <div className='relative min-h-[1.5em] flex items-center gap-5'>
            <NavbarHeader />
            <div className={'mx-auto'}>
              <NavbarNavigationMenu />
            </div>
            <div
              className={
                'absolute flex flex-row gap-5 align-baseline items-center justify-center right-5 top-0.5'
              }
            >
              <NavbarUser />
              {/*<HeaderMenuWithPopover />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
