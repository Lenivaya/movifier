import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

export type DashboardPage = 'Home' | 'Watchlist' | 'Liked' | 'WatchedMovies'
export type DashboardPageContextT = {
  currentPage: DashboardPage
}

export const DashboardPageContext = createContext<{
  dashboardPageContext: DashboardPageContextT
  setDashboardPageContext: Dispatch<SetStateAction<DashboardPageContextT>>
}>({
  dashboardPageContext: { currentPage: 'Watchlist' },
  setDashboardPageContext: () => {}
})

export const useDashboardPage = () => useContext(DashboardPageContext)

export const DashboardPageContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [dashboardPageContext, setDashboardPageContext] =
    useState<DashboardPageContextT>({
      currentPage: 'Home'
    })

  return (
    <DashboardPageContext.Provider
      value={{
        dashboardPageContext: dashboardPageContext,
        setDashboardPageContext: setDashboardPageContext
      }}
    >
      {children}
    </DashboardPageContext.Provider>
  )
}
