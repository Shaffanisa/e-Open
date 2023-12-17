import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { iconAssets } from '../data'

interface IProps {
  icon: string
  name: string
  link: any
}

export default function BoxLayanan(props: IProps) {
  const router = useRouter()

  return (
    <View
      className='mt-5 h-32 bg-white basis-[48%] p-4 mb-10 items-center justify-end rounded-xl'
      style={{
        elevation: 2,
        shadowColor: '#3F4753',
      }}
    >
      <Image source={iconAssets[props.icon]} />
      <Text className='text-xs font-semibold text-content-primary mb-1'>
        Permohonan
      </Text>
      <Text className='text-xs font-semibold text-content-primary mb-4'>
        {props.name}
      </Text>
      <Pressable
        onPress={() => router.push(props.link)}
        className='bg-secondary py-1 px-4 rounded-lg'
      >
        <Text className='text-white font-bold text-[10px]'>
          Daftar Sekarang
        </Text>
      </Pressable>
    </View>
  )
}
