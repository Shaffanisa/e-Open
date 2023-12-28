import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { create } from 'zustand'

interface DrawerState {
  navigation?: DrawerContentComponentProps['navigation']
  state?: DrawerContentComponentProps['state']
  descriptors?: DrawerContentComponentProps['descriptors']
  openDrawer: () => void
  closeDrawer: () => void
}

const useDrawer = create<DrawerState>()((set, get) => ({
  openDrawer: () => get().navigation?.openDrawer(),
  closeDrawer: () => get().navigation?.closeDrawer(),
}))

export default useDrawer
