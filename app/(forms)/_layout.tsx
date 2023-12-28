import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <SafeAreaView className='bg-white flex-1 px-4'>
      <Slot />
    </SafeAreaView>
  )
}
