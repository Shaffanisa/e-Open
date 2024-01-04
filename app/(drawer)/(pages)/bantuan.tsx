import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

const listBantuan = [
  {
    key: 'Dalam masa pandemi covid-19 apakah pelayanan pada Disdukcapil masih ada?',
    value:
      'Pelayanan tetap ada dengan mengikuti protokol kesehatan covid-19 dan dilaksanakan daring melalui aplikasi e-OPen',
  },
  {
    key: 'Apakah aplikasi e-OPen berbayar?',
    value:
      'Pelayanan tetap ada dengan mengikuti protokol kesehatan covid-19 dan dilaksanakan daring melalui aplikasi e-OPen',
  },
  {
    key: 'Kenapa saat mengupload persyaratan lodingnya lama?',
    value:
      'Pelayanan tetap ada dengan mengikuti protokol kesehatan covid-19 dan dilaksanakan daring melalui aplikasi e-OPen',
  },
  {
    key: 'Saya tidak bisa melakukan pendaftaran e-OPen',
    value:
      'Pelayanan tetap ada dengan mengikuti protokol kesehatan covid-19 dan dilaksanakan daring melalui aplikasi e-OPen',
  },
  {
    key: 'Saya tidak bisa melakukan pendaftaran e-OPen karena NIK dan KK tidak sesuai',
    value:
      'Pelayanan tetap ada dengan mengikuti protokol kesehatan covid-19 dan dilaksanakan daring melalui aplikasi e-OPen',
  },
]

export default function BantuanPage() {
  return (
    <View>
      <Text className='text-lg font-bold mb-12'>Pertanyaan Umum</Text>
      {listBantuan.map((item, i) => (
        <AccordionItem key={item.key} item={item} opened={i === 0} />
      ))}
    </View>
  )
}

interface IProps {
  item: {
    key: string
    value: string
  }
  opened?: boolean
}

function AccordionItem({ item, opened }: IProps) {
  const [isOpen, setOpen] = useState(opened)

  return (
    <View className='mb-6'>
      <Pressable
        onPress={() => setOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-secondary rounded-t-xl' : 'bg-white rounded-xl'
        } px-5 py-2 flex-row items-center justify-between`}
        style={{
          elevation: isOpen ? 0 : 2,
          shadowColor: '#3F4753',
        }}
      >
        <Text
          className={`font-bold ${isOpen ? 'text-white' : 'text-secondary'}`}
        >
          {item.key}
        </Text>
        <Text>
          {isOpen ? (
            <Feather
              name='chevron-up'
              size={24}
              color={isOpen ? '#FFFFFF' : '#0C3C84'}
            />
          ) : (
            <Feather
              name='chevron-down'
              size={24}
              color={isOpen ? '#FFFFFF' : '#0C3C84'}
            />
          )}
        </Text>
      </Pressable>
      {isOpen && (
        <View
          className='bg-white px-5 py-3 rounded-b-xl'
          style={{
            elevation: 2,
            shadowColor: '#3F4753',
          }}
        >
          <Text className='text-xs text-content-primary'>{item.value}</Text>
        </View>
      )}
    </View>
  )
}
