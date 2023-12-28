import React from 'react'
import { View, Text, Image } from 'react-native'
import { iconAssets } from '../../../data'

export default function UnduhFormulirPage() {
  return (
    <View className='pb-24'>
      <Text className='text-lg font-bold mb-12'>
        Anda bisa mengunduh Formulir Persyaratan yang dibutuhkan disini
      </Text>

      <View className='flex-row flex-wrap justify-between'>
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </View>
    </View>
  )
}

function DocumentItem() {
  return (
    <View className='basis-[48%] border border-background-tertiary rounded-lg py-2 px-1 mb-6'>
      <Text className='text-xs font-bold text-center mb-[6px]'>F-1.01</Text>
      <Image source={iconAssets.pdfIcon} className='mx-auto mb-[6px]' />
      <Text className='text-[10px] font-medium text-center mb-[6px]'>
        Formulir Biodata Keluarga
      </Text>
      <Text className='text-[8px] text-center'>
        Persyaratan Pendaftaran Akta Kelahiran
      </Text>
    </View>
  )
}
