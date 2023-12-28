import React from 'react'
import { Drawer } from 'expo-router/drawer'
import SideMenu from '../../components/SideMenu'

export default function Layout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <SideMenu {...props} />}
    />
  )
}
