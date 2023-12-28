import React from 'react'
import { View, Text, Image } from 'react-native'
import { listLayanan } from '../../../data'
import BoxPengajuan from '../../../components/BoxPengajuan'
import BoxLayanan from '../../../components/BoxLayanan'

export default function BerandaPage() {
  return (
    <>
      <View>
        <Image
          source={require('../../../assets/images/home-hero.png')}
          resizeMode='contain'
          className='w-full'
        />
      </View>

      <View className='py-6'>
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
    </>
  )
}
