import { View, Text } from 'react-native'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import ImagePicker from '../ImagePicker'
import useSectionLayanan from '../../store/useSectionLayanan'
import { ButtonPrimary } from '../Button'
import FormDataPengambilan from './FormDataPengambilan'

export default function FormCetakKia() {
  const [isChecked, setChecked] = useState(false)

  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const listPersyaratan = [
    { name: 'form-f-2.01', label: 'Form F-2.01' },
    { name: 'kk', label: 'Fotocopy KK' },
    { name: 'ktp-ortu', label: 'Fotocopy KTP Orang Tua' },
    { name: 'buku-nikah-ortu', label: 'Fotocopy Buku Nikah Orang Tua' },
    { name: 'akta-kelahiran', label: 'Fotocopy Akta Kelahiran' },
    { name: 'pas-photo', label: 'Pas Photo Berwarna Ukuran 2x3' },
  ]

  return (
    <View className='pb-20'>
      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-5'>Data Pengambilan</Text>
      <FormDataPengambilan noIntegrasi />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />

      <Text className='text-lg font-bold mb-5'>Persyaratan</Text>
      {listPersyaratan.map((item) => (
        <ImagePicker
          key={item.name}
          name={item.name}
          label={item.label}
          required
        />
      ))}

      <View className='mb-5 flex-row items-center'>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#0C3C84' : undefined}
        />
        <Text className='flex-1 ml-3 text-xs text-[#3F3F3F]'>
          Dengan melanjutkan, saya menyatakan bahwa data yang saya isi sudah
          benar.
        </Text>
      </View>
      <ButtonPrimary
        title='Daftar Permohonan'
        disabled={!isChecked}
        onPress={() => setActiveSection(activeSectionIdx + 1)}
      />
    </View>
  )
}
