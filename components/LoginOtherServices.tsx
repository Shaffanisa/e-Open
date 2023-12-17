import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { loginOtherServices as services } from '../data'

export default function LoginOtherServices() {
  const [showAll, setShowAll] = useState(false)
  const showServices = showAll ? services : services.slice(0, 1)

  return (
    <View className='px-4'>
      <Text className='text-content-primary text-xs text-center mb-4'>
        Layanan Lainnya
      </Text>

      {showServices.map((item) => (
        <View
          key={item.title}
          className='border border-background-tertiary rounded-lg p-3 mb-4 flex-row items-center justify-between'
        >
          <View>
            <Text className='text-xs font-bold text-content-primary mb-2'>
              {item.title}
            </Text>
            <Text className='text-[10px] text-content-secondary'>
              {item.desc}
            </Text>
          </View>
          <Entypo name='chevron-small-right' size={16} color='#202020' />
        </View>
      ))}

      <Pressable
        onPress={() => setShowAll(!showAll)}
        className={`flex-row items-center justify-center gap-x-1 ${
          showAll && 'mb-10'
        }`}
      >
        {!showAll ? (
          <>
            <Text className='text-xs text-center text-secondary'>
              Lebih Banyak
            </Text>
            <Entypo name='chevron-small-down' size={16} color='#0C3C84' />
          </>
        ) : (
          <>
            <Text className='text-xs text-center text-secondary'>
              Lebih Sedikit
            </Text>
            <Entypo name='chevron-small-up' size={16} color='#0C3C84' />
          </>
        )}
      </Pressable>
    </View>
  )
}
