import { View } from 'react-native'
import React from 'react'

export default function HeaderAccentTwo() {
  return (
    <View className='absolute h-[8vh] w-screen top-0'>
      <View
        className={`absolute bg-primary opacity-20 w-3/4 aspect-square rounded-full bottom-0`}
      />
      <View
        className={`absolute bg-primary opacity-20 w-1/2 aspect-square rounded-full bottom-1/4 right-8`}
      />
    </View>
  )
}
