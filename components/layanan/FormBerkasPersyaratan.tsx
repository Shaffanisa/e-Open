import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useSectionLayanan from '../../store/useSectionLayanan'
import ImagePicker from '../ImagePicker'
import Checkbox from 'expo-checkbox'
import { ButtonPrimary, ButtonSecondary } from '../Button'

interface IProps {
  berkasList: {
    name: string
    label: string
  }[]
}

export default function FormBerkasPersyaratan({ berkasList }: IProps) {
  const [isChecked, setChecked] = useState(false)
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  return (
    <View className='mb-10'>
      {berkasList.map((item) => (
        <ImagePicker
          key={item.name}
          name={item.name}
          label={item.label}
          required
        />
      ))}

      <View className='mb-6 flex-row items-center'>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#0C3C84' : undefined}
        />
        <Text className='flex-1 ml-3 text-xs text-[#3F3F3F]'>
          Dengan melanjutkan, saya menyatakan bahwa data yang saya isi adalah
          akurat dan asli.
        </Text>
      </View>

      <ButtonPrimary
        title='Daftar Permohonan'
        disabled={!isChecked}
        onPress={() => setActiveSection(activeSectionIdx + 1)}
      />
      <ButtonSecondary
        title='Kembali'
        onPress={() => setActiveSection(activeSectionIdx - 1)}
      />
    </View>
  )
}
