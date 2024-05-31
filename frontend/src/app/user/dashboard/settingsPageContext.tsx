import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

export type SettingsPage = 'Home' | 'Watchlist' | 'Liked'
export type SettingsPageContextT = {
  currentPage: SettingsPage
}
export const SettingsPageContext = createContext<{
  settingsPageContext: SettingsPageContextT
  setSettingsPageContext: Dispatch<SetStateAction<SettingsPageContextT>>
}>({
  settingsPageContext: { currentPage: 'Watchlist' },
  setSettingsPageContext: () => {}
})
export const useSettingsPage = () => useContext(SettingsPageContext)
export const SettingsPageContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [settingsPageContext, setSettingsPageContext] =
    useState<SettingsPageContextT>({
      currentPage: 'Home'
    })

  return (
    <SettingsPageContext.Provider
      value={{ settingsPageContext, setSettingsPageContext }}
    >
      {children}
    </SettingsPageContext.Provider>
  )
}
