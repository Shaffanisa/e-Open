import { View, Text, Image } from 'react-native'
import React from 'react'

export default function LoginHeader() {
  return (
    <View className='w-4/5 mx-auto mb-6 mt-8'>
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode='contain'
        className='w-[50%] mx-auto'
      />
      <Text className='-mt-4 text-sm font-bold mb-2 text-center'>
        Selamat Datang di Aplikasi <Text className='text-primary'>E-Open</Text>
      </Text>
      <Text className='text-content-tertiary text-[10px] leading-4 text-center'>
        Selalu Akses Aplikasi e-OPen Dalam Mengurus Adminduk Agar Proses Menjadi
        Lebih Mudah
      </Text>
    </View>
  )
}
