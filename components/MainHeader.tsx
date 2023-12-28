import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import useDrawer from '../store/useDrawer'
import { usePathname } from 'expo-router'
import { sideMenuList } from '../data'

export default function MainHeader() {
  const path = usePathname()
  const openDrawer = useDrawer((state) => state.openDrawer)

  return (
    <View className='flex-row items-center px-4 pt-10 pb-6'>
      <Pressable
        className='w-10 h-10 bg-[#FFF9E2] rounded-full justify-center items-center mr-6'
        onPress={openDrawer}
      >
        <Entypo name='menu' size={24} color='#202020' />
      </Pressable>
      <View>
        {path === '/beranda' ? (
          <>
            <Text className='text-content-primary mb-2'>Selamat Datang!</Text>
            <Text className='text-content-primary text-2xl font-bold'>
              Natalia 👋
            </Text>
          </>
        ) : (
          <Text className='text-content-primary text-xl font-bold'>
            {sideMenuList.find((item) => item.href === path)?.name}
          </Text>
        )}
      </View>
      <Image
        source={require('../assets/images/logo-small.png')}
        className='ml-auto'
      />
    </View>
  )
}
