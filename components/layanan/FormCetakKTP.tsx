import { useState } from 'react'
import useSectionLayanan from '../../store/useSectionLayanan'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { ButtonPrimary } from '../Button'
import Checkbox from 'expo-checkbox'
import ImagePicker from '../ImagePicker'
import InputText from '../InputText'

interface IProps {
  isUbah?: boolean
}

export default function FormCetakKTP({ isUbah }: IProps) {
  const [isChecked, setChecked] = useState(false)

  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const {
    control,
    formState: { errors },
  } = useForm<{ keterangan: string; lokasiPengambilan: string }>({
    defaultValues: {
      keterangan: 'Membuat E-KTP Baru',
      lokasiPengambilan: 'Kantor Kecamatan Bekasi Barat',
    },
  })

  return (
    <View>
      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-5'>Data Pengambilan</Text>
      <InputText
        required
        control={control}
        rules={{ required: true }}
        name='keterangan'
        label='Keterangan'
        placeholder='Masukan Keterangan'
        errorMsg={errors.keterangan?.message}
      />
      <InputText
        disabled
        control={control}
        rules={{ required: true }}
        name='lokasiPengambilan'
        label='Lokasi Pengambilan'
        errorMsg={errors.lokasiPengambilan?.message}
      />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-5'>Persyaratan</Text>
      <ImagePicker required name='kk' label='Unggah KK' />
      {isUbah && (
        <ImagePicker required name='ktp-lama' label='Unggah KTP Lama' />
      )}

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
