import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { listLayanan } from '../data'
import HeaderAccentTwo from '../components/HeaderAccentTwo'
import HomeHeader from '../components/HomeHeader'
import BoxPengajuan from '../components/BoxPengajuan'
import BoxLayanan from '../components/BoxLayanan'

export default function HomePage() {
  return (
    <ScrollView className='flex-1' contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar style='dark' />
      <HeaderAccentTwo />

      <HomeHeader />
      <View>
        <Image
          source={require('../assets/images/home-hero.png')}
          resizeMode='contain'
          className='w-full px-4'
        />
      </View>

      <View className='px-4 py-6'>
        <View className='mb-6'>
          <Text className='text-lg font-bold mb-6'>
            Pengajuan yang Anda Miliki
          </Text>
          <BoxPengajuan />
        </View>

        <View>
          <Text className='text-lg font-bold mb-10'>Layanan Adminduk</Text>
          <View className='flex-row flex-wrap justify-between'>
            {listLayanan.map((item) => (
              <BoxLayanan
                key={item.name}
                icon={item.icon}
                name={item.name}
                link={item.link}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
