import React from 'react'
import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <View className='flex-1 bg-white'>
      <Slot />
    </View>
  )
}
