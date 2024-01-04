import Checkbox from 'expo-checkbox'
import { View, Text } from 'react-native'
import { ButtonPrimary } from '../Button'
import { useState } from 'react'
import useSectionLayanan from '../../store/useSectionLayanan'
import ImagePicker from '../ImagePicker'
import InputText from '../InputText'
import useDummyData from '../../store/useDummyData'
import { useForm } from 'react-hook-form'
import CheckboxAnggotaKeluarga from './CheckboxAnggotaKeluarga'

export default function FormPenguranganJiwa() {
  const [isChecked, setChecked] = useState(false)
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)
  const { provinsi, kota, kecamatan, kelurahan } = useDummyData()

  const { control } = useForm({
    defaultValues: {
      provinsi,
      kota,
      kecamatan,
      kelurahan,
      keterangan: 'Ingin mengurangkan keluarga baru',
      lokasiPengambilan: 'Kantor Kecamatan Bekasi Barat',
    },
  })

  const listPersyaratan = [
    { name: 'form-f-1.02', label: 'Form F-1.02' },
    { name: 'kk-lama', label: 'Kartu Keluarga Lama' },
    { name: 'bukti', label: 'Bukti Peristiwa Pendudukan' },
    { name: 'pernyataanKepKel', label: 'Surat Peryataan dari Kepala Keluarga' },
    { name: 'surat-nikah', label: 'Surat Nikah' },
    { name: 'akta-kelahiran', label: 'Akta Kelahiran' },
  ]

  const dataWilayahList = [
    { name: 'provinsi', label: 'Provinsi' },
    { name: 'kota', label: 'Kota/Kabupaten' },
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'kelurahan', label: 'Desa/Kelurahan' },
  ]

  return (
    <View>
      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-1'>Pengurangan Jiwa</Text>
      <Text className='text-[10px] text-content-secondary mb-4'>
        Checklist yang anda ingin kurangi
      </Text>
      <CheckboxAnggotaKeluarga />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-4'>Data Wilayah</Text>
      {dataWilayahList.map((item) => (
        <InputText
          required
          disabled
          key={item.name}
          name={item.name}
          control={control}
          label={item.label}
        />
      ))}

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-4'>Persyaratan</Text>
      <InputText
        required
        control={control}
        rules={{ required: true }}
        name='keterangan'
        label='Keterangan'
        placeholder='Masukan Keterangan'
      />
      <InputText
        required
        disabled
        control={control}
        rules={{ required: true }}
        name='lokasiPengambilan'
        label='Lokasi Pengambilan'
      />

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
