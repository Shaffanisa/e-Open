import React from 'react'
import { View, Text, Image } from 'react-native'
import { iconAssets } from '../../../../data'
import InputSearch from '../../../../components/InputSearch'
import { Link } from 'expo-router'

const listStatus = [
  {
    icon: 'statusWaitIcon',
    name: 'Menunggu Verifikasi',
    value: 1,
    bgColor: '#FFF2E1',
  },
  {
    icon: 'statusProcessIcon',
    name: 'Sedang Proses',
    value: 0,
    bgColor: '#E9F2FF',
  },
  {
    icon: 'statusSuccessIcon',
    name: 'Selesai',
    value: 0,
    bgColor: '#DEF6E7',
  },
  {
    icon: 'statusCancelIcon',
    name: 'DiTolak',
    value: 1,
    bgColor: '#FFEEEE',
  },
]

const layananDummy = [
  {
    id: '3123871282781',
    name: 'Permohonan Rekam KTP-EL',
    date: '1 Desember 2023',
    status: 'Menunggu Verifikasi',
  },
  {
    id: '3123871282782',
    name: 'Permohonan Rekam KTP-EL',
    date: '1 Desember 2023',
    status: 'DiTolak',
  },
]

export default function StatusPage() {
  return (
    <View>
      <View className='flex-row justify-between'>
        {listStatus.map((item) => (
          <View
            key={item.name}
            className='p-[6px] basis-[23%] flex-wrap rounded'
            style={{ backgroundColor: item.bgColor }}
          >
            <Image
              source={iconAssets[item.icon]}
              resizeMode='contain'
              className='absolute right-0 m-[6px]'
            />
            <Text className='text-2xl font-semibold text-content-primary pb-1 pl-1 pt-3'>
              {item.value}
            </Text>
            <Text className='text-[8px] font-semibold text-content-primary w-4/5'>
              {item.name}
            </Text>
          </View>
        ))}
      </View>

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-[18px] font-bold w-[75%] mb-6'>
        Silahkan Cari Data Pengajuan Layananmu Disini !
      </Text>
      <InputSearch name='nik' placeholder='Cari' defaultValues={{}} />
      <View className='h-[1px] bg-[#E8E8E8] mb-5' />
      <Text className='text-[18px] font-bold w-[75%] mb-6'>Layanan Anda</Text>
      {layananDummy.map((item) => (
        <BoxLayanan key={item.id} item={item} />
      ))}
    </View>
  )
}

interface IProps {
  item: {
    id: string
    name: string
    status: string
    date: string
  }
}

function BoxLayanan({ item }: IProps) {
  return (
    <View
      className='bg-white flex-row pt-4 pb-6 px-7 mb-6 items-center justify-between'
      style={{
        elevation: 2,
        shadowColor: '#3F4753',
      }}
    >
      {item.status === 'Menunggu Verifikasi' && (
        <View className='bg-primary rounded-full w-10 h-10 justify-center items-center'>
          <Image
            source={require('../../../../assets/images/hourglass-icon.png')}
          />
        </View>
      )}
      {item.status === 'DiTolak' && (
        <View className='bg-negative rounded-full w-10 h-10 justify-center items-center'>
          <Image
            source={require('../../../../assets/images/cancel-icon.png')}
          />
        </View>
      )}
      <View className='flex-1 px-4'>
        <Text className='text-xs font-bold text-content-primary mb-1'>
          {item.name}
        </Text>
        <View className='flex-row justify-between mb-1'>
          <Text className='text-[10px] font-semibold text-content-secondary'>
            {item.id}
          </Text>
          <Text className='text-[10px] font-semibold text-content-secondary'>
            {item.date}
          </Text>
        </View>
        <Text className='text-[10px] font-semibold text-content-secondary'>
          {item.status}
        </Text>
      </View>
      <Link
        href={`/status/${item.id}`}
        className='mt-auto bg-secondary text-white py-1 px-4 text-[10px] font-bold rounded-lg'
      >
        Detail
      </Link>
    </View>
  )
}
