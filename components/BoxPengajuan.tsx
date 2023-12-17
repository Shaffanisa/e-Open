import { View, Text, Image } from 'react-native'
import React from 'react'

export default function BoxPengajuan() {
  return (
    <View
      className='flex-row bg-white items-center py-5 px-3 rounded-lg'
      style={{
        elevation: 2,
        shadowColor: '#3F4753',
      }}
    >
      <Image source={require('../assets/images/work-time-icon.png')} />
      <View className='relative h-full ml-5'>
        <Text className='text-xs font-bold text-primary mb-2'>
          Permohonan Rekam KTP-EL
        </Text>
        <Text className='text-[10px] text-content-primary mb-1'>
          No. Pendaftaran :{' '}
          <Text className='font-bold'>12345 - 12345 - 12345</Text>
        </Text>
        <Text className='text-[10px] text-content-primary'>
          NIK Pemohon : <Text className='font-bold'>3123871282781</Text>
        </Text>

        <View className='absolute bottom-0 bg-primary rounded-full inline px-2'>
          <Text className='text-white text-[10px] font-bold leading-4'>
            Menunggu Verifikasi
          </Text>
        </View>
      </View>
    </View>
  )
}
