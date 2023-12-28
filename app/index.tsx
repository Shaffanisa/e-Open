import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import HeaderAccentOne from '../components/HeaderAccentOne'
import LoginHeader from '../components/LoginHeader'
import LoginOtherServices from '../components/LoginOtherServices'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  return (
    <ScrollView className='flex-1' contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar style='dark' />
      <HeaderAccentOne />

      <View className='flex-1'>
        <LoginHeader />

        <LoginForm />

        <Text className='flex items-center justify-center text-center text-content-tertiary mb-6'>
          Belum punya akun?{' '}
          <Link href='/register' className='text-secondary font-bold'>
            Daftar di sini
          </Link>
        </Text>

        <LoginOtherServices />
      </View>

      <View className='sticky bottom-0 pt-4'>
        <View className='bg-[#FFF9E2] w-full py-3 px-4'>
          <Text className='text-xs font-bold text-content-primary text-center'>
            Selalu Akses Aplikasi e-OPen Agar Terhindar dari Pungli
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
