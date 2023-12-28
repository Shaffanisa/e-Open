import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Slot, usePathname, useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { listLayanan } from '../../data'
import ModalSyaratLayanan from '../../components/ModalSyaratLayanan'
import BoxNoPendaftaran from '../../components/BoxNoPendaftaran'
import { ScrollView } from 'react-native-gesture-handler'

export default function Layout() {
  const router = useRouter()
  const path = usePathname()

  return (
    <BottomSheetModalProvider>
      <SafeAreaView className='bg-white flex-1'>
        <View className='py-5 flex-row justify-between items-center px-4'>
          <View className='flex-row items-center'>
            <Pressable onPress={() => router.back()} className='mr-3'>
              <Entypo name='chevron-small-left' size={24} color='#202020' />
            </Pressable>
            <Text className='text-base text-content-primary font-bold'>
              Permohonan {listLayanan.find((item) => item.link === path)?.name}
            </Text>
          </View>
          <ModalSyaratLayanan />
        </View>

        <ScrollView className='px-4'>
          <BoxNoPendaftaran />
          <Slot />
        </ScrollView>
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}
