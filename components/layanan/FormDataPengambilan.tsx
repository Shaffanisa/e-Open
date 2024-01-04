import React, { useState } from 'react'
import { View, Text } from 'react-native'
import InputText from '../InputText'
import { useForm } from 'react-hook-form'
import InputDate from '../InputDate'
import Checkbox from 'expo-checkbox'
import useSectionLayanan from '../../store/useSectionLayanan'
import { ButtonPrimary, ButtonSecondary } from '../Button'

interface IProps {
  noIntegrasi?: boolean
}

export default function FormDataPengambilan({ noIntegrasi }: IProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isChecked, setChecked] = useState(false)
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const {
    control,
    formState: { errors },
  } = useForm<{ lokasi: string }>({
    defaultValues: { lokasi: 'Kantor Kecamatan Bekasi Barat' },
  })

  return (
    <View className={noIntegrasi ? '' : 'pb-10'}>
      <InputText
        required
        name='lokasi'
        control={control}
        label='Lokasi Pengambilan'
        placeholder='Masukan Lokasi'
        errorMsg={errors.lokasi?.message}
      />

      <InputDate
        required
        name='tanggal'
        label='Tanggal Pengambilan'
        date={date}
        setDate={setDate}
      />

      {!noIntegrasi && (
        <>
          <View className='mb-24'>
            <Text className='mb-3 text-content-primary'>Layanan Integrasi</Text>
            <View className='flex-row items-center'>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#0C3C84' : undefined}
              />
              <Text className='flex-1 ml-3 text-xs text-content-primary'>
                Klik Disini
              </Text>
            </View>
          </View>

          <ButtonPrimary
            title={`Lanjut Isi ${sectionList[activeSectionIdx + 1]}`}
            onPress={() => setActiveSection(activeSectionIdx + 1)}
          />
          <ButtonSecondary
            title='Kembali'
            onPress={() => setActiveSection(activeSectionIdx - 1)}
          />
        </>
      )}
    </View>
  )
}
