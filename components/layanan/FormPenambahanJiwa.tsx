import Checkbox from 'expo-checkbox'
import { View, Text } from 'react-native'
import { ButtonPrimary } from '../Button'
import { useState } from 'react'
import useSectionLayanan from '../../store/useSectionLayanan'
import InputText from '../InputText'
import useDummyData from '../../store/useDummyData'
import { useForm } from 'react-hook-form'
import ImagePicker from '../ImagePicker'
import InputSearch, { useSearchClicked } from '../InputSearch'
import InputRadio from '../InputRadio'

export default function FormPenambahanJiwa() {
  const [isChecked, setChecked] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [cariJiwaClicked, setCariJiwaClicked] = useState(false)
  const { isSearchClicked } = useSearchClicked()
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)
  const { dataTambahJiwa, nik, provinsi, kota, kecamatan, kelurahan } =
    useDummyData()

  const { control } = useForm({
    defaultValues: {
      ...dataTambahJiwa,
      provinsi,
      kota,
      kecamatan,
      kelurahan,
      keterangan: 'Ingin menambahkan keluarga baru',
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

  const dataJiwaList = [
    { name: 'namaLengkap', label: 'Nama Lengkap' },
    { name: 'tempatLahir', label: 'Tempat Lahir' },
    { name: 'tanggalLahir', label: 'Tanggal Lahir' },
    { name: 'jenisKelamin', label: 'Jenis Kelamin' },
    { name: 'golonganDarah', label: 'Golongan Darah' },
    { name: 'agama', label: 'Agama' },
    { name: 'statusKawin', label: 'Status Kawin' },
    { name: 'pendidikan', label: 'Pendidikan' },
    { name: 'pekerjaan', label: 'Pekerjaan' },
  ]

  return (
    <View>
      {showInput ? (
        <>
          <View className='h-[1px] bg-[#E8E8E8] my-5' />
          <InputSearch
            name='nik'
            title='Penambahan Jiwa'
            label='NIK'
            placeholder='Masukan NIK'
            defaultValues={{ nik }}
            customOnPress={() => setCariJiwaClicked(true)}
          />
        </>
      ) : (
        <ButtonPrimary title='Tambah Jiwa' onPress={() => setShowInput(true)} />
      )}

      {isSearchClicked && cariJiwaClicked && (
        <>
          {dataJiwaList.map((item) => (
            <InputText
              required
              disabled
              key={item.name}
              name={item.name}
              control={control}
              label={item.label}
            />
          ))}
          <InputRadio
            name='hubunganKeluarga'
            control={control}
            optionList={[
              { name: 'Orang Tua', value: 'orang-tua' },
              { name: 'Keponakan', value: 'keponakan' },
              { name: 'Menantu', value: 'menantu' },
              { name: 'Anak', value: 'anak' },
            ]}
            label='Hubungan Keluarga'
          />
        </>
      )}

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
        onPress={() => {
          setActiveSection(activeSectionIdx + 1)
          useSearchClicked.setState({ isSearchClicked: false })
        }}
      />
    </View>
  )
}
