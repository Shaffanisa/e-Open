import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function HomeHeader() {
  return (
    <View className='flex-row items-center px-4 pt-10 pb-6'>
      <Pressable className='p-2 mr-6'>
        <Entypo name='menu' size={24} color='#202020' />
      </Pressable>
      <View>
        <Text className='text-content-primary mb-2'>Selamat Datang!</Text>
        <Text className='text-content-primary text-2xl font-bold'>
          Natalia 👋
        </Text>
      </View>
      <Image
        source={require('../assets/images/logo-small.png')}
        className='ml-auto'
      />
    </View>
  )
}
