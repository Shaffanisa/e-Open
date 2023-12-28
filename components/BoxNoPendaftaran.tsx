import React from 'react'
import { View, Text, Image } from 'react-native'
import { iconAssets } from '../data'

export default function BoxNoPendaftaran() {
  return (
    <>
      <View className='flex-row py-2 items-center'>
        <Image source={iconAssets.yellowFileIcon} />
        <View className='ml-3'>
          <Text className='text-[10px] text-content-secondary mb-1'>
            Data Pendaftaran
          </Text>
          <Text className='text-[10px] font-bold text-content-secondary'>
            12345 - 12345 - 12345
          </Text>
        </View>
      </View>

      <View className='h-[1px] bg-[#E8E8E8] my-6' />
    </>
  )
}
