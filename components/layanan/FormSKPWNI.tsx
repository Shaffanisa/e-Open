import { View, Text } from 'react-native'
import FormDataPengambilan from './FormDataPengambilan'
import ImagePicker from '../ImagePicker'
import { useState } from 'react'
import useSectionLayanan from '../../store/useSectionLayanan'
import { useForm } from 'react-hook-form'
import { ButtonPrimary } from '../Button'
import Checkbox from 'expo-checkbox'
import InputText from '../InputText'
import useDummyData from '../../store/useDummyData'
import InputRadio from '../InputRadio'
import CheckboxAnggotaKeluarga from './CheckboxAnggotaKeluarga'

type FormData = {
  alamatBaru: string
  provinsi: string
  kota: string
  kecamatan: string
  kelurahan: string
  alasanPindah: string
  klasifikasiPindah: string
  jenisPindah: string
  statusKK: string
  jumlahAnggotaKeluarga: string
}

export default function FormSKPWNI() {
  const [isChecked, setChecked] = useState(false)

  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)
  const { dataSKPWNI } = useDummyData()

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: dataSKPWNI,
  })

  const listPersyaratan = [
    { name: 'form-f-1.03', label: 'Form F-1.03' },
    { name: 'kk-asal', label: 'KK dari Daerah Asal' },
    { name: 'ktp-ortu', label: 'Fotocopy KTP Orang Tua' },
    { name: 'ktp-keluarga-pindah', label: 'KTP Keluarga yang Pindah' },
    {
      name: 'bukti',
      label: 'Bukti Peristiwa Kependudukan/Peristiwa Penting Lainnya',
    },
  ]

  return (
    <View className='pb-20'>
      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-4'>Data Kepindahan</Text>
      {[
        { name: 'alamatBaru', label: 'Alamat Baru' },
        { name: 'provinsi', label: 'Provinsi' },
        { name: 'kota', label: 'Kabupaten/Kota' },
        { name: 'kecamatan', label: 'Kecamatan' },
        { name: 'kelurahan', label: 'Desa/Kelurahan' },
      ].map((item) => (
        <InputText
          key={item.name}
          required
          control={control}
          rules={{ required: true }}
          name={item.name}
          label={item.label}
          placeholder={`Masukan ${item.label}`}
        />
      ))}

      <InputRadio
        name='alasanPindah'
        control={control}
        label='Alasan Pindah'
        errorMsg={errors.alasanPindah?.message}
        optionList={[
          { name: 'Pekerjaan', value: 'pekerjaan' },
          { name: 'Keamanan', value: 'keamanan' },
          { name: 'Perumahan', value: 'perumahan' },
          { name: 'Pendidikan', value: 'pendidikan' },
          { name: 'Kesehatan', value: 'kesehatan' },
          { name: 'Keluarga', value: 'keluarga' },
          { name: 'Lainnya', value: 'lainnya' },
        ]}
      />
      <InputRadio
        basisTwo
        name='klasifikasiPindah'
        control={control}
        label='Klasifikasi Pindah'
        errorMsg={errors.klasifikasiPindah?.message}
        optionList={[
          { name: 'Dalam Satu Kelurahan', value: 'satu-kelurahan' },
          { name: 'Antar Kecamatan', value: 'antar-kecamatan' },
          { name: 'Antar Provinsi', value: 'antar-provinsi' },
          { name: 'Antar Kelurahan', value: 'antar-kelurahan' },
          { name: 'Antar Kota dlm Provinsi', value: 'antar-kota' },
        ]}
      />
      <InputRadio
        flexCol
        name='jenisPindah'
        control={control}
        label='Jenis Kepindahan'
        errorMsg={errors.jenisPindah?.message}
        optionList={[
          { name: 'Kepala Keluarga', value: 'kepala-keluarga' },
          {
            name: 'Kepala dan Sebagian Keluarga',
            value: 'kepala-sebagian-keluarga',
          },
          {
            name: 'Kepala dan Seluruh Keluarga',
            value: 'kepala-seluruh-keluarga',
          },
          { name: 'Anggota Keluarga', value: 'anggota-keluarga' },
        ]}
      />
      <InputRadio
        basisTwo
        name='statusKK'
        control={control}
        label='Status KK Bagi Yang Pindah'
        errorMsg={errors.statusKK?.message}
        optionList={[
          { name: 'Membuat KK Baru', value: 'kk-baru' },
          { name: 'Numpang KK', value: 'kk-numpang' },
        ]}
      />

      <InputText
        required
        disabled
        control={control}
        rules={{ required: true }}
        name='jumlahAnggotaKeluarga'
        label='Jumlah Anggota Keluarga'
      />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-1'>Data Keluarga yang Pindah</Text>
      <Text className='text-[10px] text-content-secondary mb-4'>
        Checklist yang pindah
      </Text>
      <CheckboxAnggotaKeluarga />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-4'>Data Pengambilan</Text>
      <FormDataPengambilan noIntegrasi />

      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-4'>Persyaratan</Text>
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
