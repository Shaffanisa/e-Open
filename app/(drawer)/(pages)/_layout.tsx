import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MainHeader from '../../../components/MainHeader'
import HeaderAccentTwo from '../../../components/HeaderAccentTwo'

export default function Layout() {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <HeaderAccentTwo />
      <MainHeader />

      <ScrollView
        className='flex-1 pt-5 px-4 pb-24'
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Slot />
      </ScrollView>
    </View>
  )
}
