import { View } from 'react-native'
import React from 'react'

export default function HeaderAccentOne() {
  return (
    <View className='absolute h-[12vh] w-screen top-0'>
      <View
        className={`absolute bg-primary opacity-20 w-1/2 aspect-square rounded-full bottom-0 -left-1/4`}
      />
      <View
        className={`absolute bg-primary opacity-20 w-1/2 aspect-square rounded-full bottom-1/4 -left-2`}
      />
    </View>
  )
}
