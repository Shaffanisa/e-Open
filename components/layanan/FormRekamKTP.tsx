import { useState } from 'react'
import { View, Text } from 'react-native'
import useSectionLayanan from '../../store/useSectionLayanan'
import { useForm } from 'react-hook-form'
import ImagePicker from '../ImagePicker'
import { ButtonPrimary } from '../Button'
import Checkbox from 'expo-checkbox'
import InputText from '../InputText'
import InputDate from '../InputDate'

export default function FormRekamKTP() {
  const [isChecked, setChecked] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const {
    control,
    formState: { errors },
  } = useForm<{ keterangan: string; lokasiPerekaman: string }>({
    defaultValues: {
      keterangan: 'Ingin Membuat KTP',
      lokasiPerekaman: 'Kantor Kecamatan Bekasi Barat',
    },
  })

  const listPersyaratan = [
    { name: 'form-f-1.03', label: 'Form F-1.03' },
    { name: 'akta-kelahiran', label: 'Fotokopi Akta Kelahiran' },
    { name: 'kk', label: 'Fotokopi KK' },
  ]

  return (
    <View className='mt-5'>
      <InputText
        required
        control={control}
        rules={{ required: true }}
        name='keterangan'
        label='Keterangan'
        placeholder='Masukan Keterangan'
        errorMsg={errors.keterangan?.message}
      />

      <View className='h-[1px] bg-[#E8E8E8] mb-5' />
      <Text className='text-lg font-bold mb-5'>Data Lokasi Perekaman</Text>
      <InputText
        required
        control={control}
        rules={{ required: true }}
        name='lokasiPerekaman'
        label='Lokasi Perekaman'
        placeholder='Masukan Lokasi'
        errorMsg={errors.lokasiPerekaman?.message}
      />
      <InputDate
        required
        name='tanggal'
        label='Tanggal Perekaman'
        date={date}
        setDate={setDate}
      />

      <Text className='mb-1'>
        Proses Pengambilan
        <Text className='text-negative'> *</Text>
      </Text>
      <View className='mb-4 border border-primary bg-[#FFF9E2] rounded-lg pl-4 py-2 flex-row'>
        <Text className='text-content-secondary text-xs'>
          Pencetakan KTP-EL Akan Diterima Setelah Status Perekaman PRP/Siap
          Cetak Dari Kemendagri
        </Text>
      </View>

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
