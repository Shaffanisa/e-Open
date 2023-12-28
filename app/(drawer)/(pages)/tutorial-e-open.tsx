import React from 'react'
import { View, Text } from 'react-native'

export default function TutorialPage() {
  return (
    <View className='pb-24'>
      <Text className='text-lg font-bold mb-12'>
        Silahkan menonton Video Tutorial alur pengajuan layanan
      </Text>

      <View className='mb-6'>
        <Text className='text-lg font-bold mb-6'>
          Tutorial Permohonan Akta Kelahiran
        </Text>
        <TutorialItem />
      </View>

      <View className='mb-6'>
        <Text className='text-lg font-bold mb-6'>
          Tutorial Permohonan Akta Kematian
        </Text>
        <TutorialItem />
      </View>
    </View>
  )
}

function TutorialItem() {
  return (
    <View className='bg-content-primary h-40 rounded-xl justify-center items-center'>
      <View className='w-20 h-20 rounded-full bg-white justify-center items-center'>
        <View
          className='w-0 h-0
            border-t-[20px] border-t-transparent
            border-l-[40px] border-l-content-primary
            border-b-[20px] border-b-transparent'
        ></View>
      </View>
    </View>
  )
}
