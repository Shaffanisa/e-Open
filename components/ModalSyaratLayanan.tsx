import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { ScrollView } from 'react-native-gesture-handler'
import { listLayanan } from '../data'
import { usePathname } from 'expo-router'

export default function ModalSyaratLayanan() {
  const path = usePathname()
  const layanan = listLayanan.find((item) => item.link === path)

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null)
  const snapPoints = React.useMemo(() => ['25%', '50%'], [])

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <>
      <Pressable onPress={handlePresentModalPress}>
        <Feather name='alert-circle' size={24} color='#202020' />
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={BottomSheetBackdrop}
      >
        <ScrollView className='flex-1'>
          <Text className='pt-4 pb-10 text-center text-base text-content-primary font-bold'>
            Persyaratan {layanan?.name}
          </Text>
          <View className='px-4'>
            {!layanan?.link.includes('kartu-keluarga') &&
            !layanan?.link.includes('cetak-ktp-el')
              ? layanan?.syarat?.map((item: any, i) => (
                  <View key={i} className='flex-row mb-1'>
                    <Text className='text-sm text-content-secondary'>
                      {i + 1}.
                    </Text>
                    <Text className='text-sm text-content-secondary ml-1'>
                      {item}
                    </Text>
                  </View>
                ))
              : layanan?.syarat?.map((item: any, i) => (
                  <View key={i} className='mb-6'>
                    <View className='flex-row mb-6'>
                      <Text className='text-sm font-bold text-content-secondary'>
                        {i + 1}.
                      </Text>
                      <Text className='text-sm font-bold text-content-secondary ml-1'>
                        {item.name}
                      </Text>
                    </View>
                    {item.list.map((poin: any) => (
                      <View key={poin} className='flex-row mb-1'>
                        <Text className='text-sm text-content-secondary'>
                          {'\u2022'}
                        </Text>
                        <Text className='text-sm text-content-secondary ml-3'>
                          {poin}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
            {layanan?.link.includes('cetak-ktp-el') && (
              <>
                <Text className='text-sm text-content-secondary mb-6'>
                  Dalam kondisi{' '}
                  <Text className='font-bold'>
                    blanko KTP-EL terbatas, maka diterbitkan suket sebagai
                    pengganti KTP-EL
                  </Text>{' '}
                  (surat edaran mendagri nomor 47.13/10231/DUKCAPIL-2016 tentang
                  surat keterangan pengganti KTP-EL)
                </Text>
                <Text className='text-sm text-content-secondary mb-6'>
                  <Text className='font-bold'>
                    Pencetakan KTP-EL berdasarkan tanggal terbit suket
                  </Text>{' '}
                  dilakukan secara bertahap sesuai ketersediaan blanko KTP-EL
                </Text>
              </>
            )}
          </View>
        </ScrollView>
      </BottomSheetModal>
    </>
  )
}
