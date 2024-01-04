import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Slot, usePathname, useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { listLayanan } from '../../../data'
import ModalSyaratLayanan from '../../../components/layanan/ModalSyaratLayanan'
import BoxNoPendaftaran from '../../../components/layanan/BoxNoPendaftaran'
import { ScrollView } from 'react-native-gesture-handler'
import Konfirmasi from '../../../components/layanan/Konfirmasi'
import useSectionLayanan from '../../../store/useSectionLayanan'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  const router = useRouter()
  const path = usePathname()
  const { activeSection } = useSectionLayanan()

  return (
    <BottomSheetModalProvider>
      <StatusBar style='dark' />

      {activeSection === 'konfirmasi' && (
        <View className='fixed w-screen h-screen'>
          <Konfirmasi />
        </View>
      )}
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

        <ScrollView className='px-4 pt-6'>
          <BoxNoPendaftaran />
          <Slot />
        </ScrollView>
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}
