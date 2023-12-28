import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { View } from 'react-native'
import { create } from 'zustand'
import InputText from '../../components/InputText'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface SectionState {
  selectedSection: string
  setSelectedSection: (section: string) => void
}

const useSection = create<SectionState>()((set) => ({
  selectedSection: 'data-kelahiran',
  setSelectedSection: (section) => set({ selectedSection: section }),
}))

export default function AktaKelahiranPage() {
  return (
    <View>
      <SectionSelect />
      <View className='h-[1px] bg-[#E8E8E8] my-6' />
      <Text>Permohonan Akta Form</Text>
      {/* <SectionDataKelahiran /> */}
      {/* <SectionDataIbu /> */}
    </View>
  )
}

function SectionSelect() {
  const { selectedSection, setSelectedSection } = useSection()

  const AktaKelahiranSectionList = [
    { name: 'Data Kelahiran', value: 'data-kelahiran' },
    { name: 'Data Ibu', value: 'data-ibu' },
    { name: 'Data Ayah', value: 'data-ayah' },
    { name: 'Data Pelapor', value: 'data-pelapor' },
    { name: 'Data Saksi 1', value: 'data-saksi-1' },
    { name: 'Data Saksi 2', value: 'data-saksi-2' },
    { name: 'Data Pengambilan', value: 'data-pengambilan' },
    { name: 'Unggah Persyaratan', value: 'unggah-persyaratan' },
  ]

  return (
    <Picker
      selectedValue={selectedSection}
      onValueChange={(itemValue) => setSelectedSection(itemValue)}
      style={{ color: 'blue' }}
      itemStyle={{ color: 'red' }}
    >
      {AktaKelahiranSectionList.map((item) => (
        <Picker.Item key={item.value} label={item.name} value={item.value} />
      ))}
    </Picker>
  )
}

function SectionDataKelahiran() {
  const [NIK, setNIK] = React.useState('')
  const [namaLengkap, setNamaLengkap] = React.useState('')
  const [tempatLahir, setTempatLahir] = React.useState('')
  const [kepalaKeluarga, setKepalaKeluarga] = React.useState('Marcel Widianto')
  const [kecamatan, setKecamatan] = React.useState('Bekasi Barat')
  const [kelurahan, setKelurahan] = React.useState('Kranji')

  const [errorNIK, setErrorNIK] = React.useState('')
  const [errorNamaLengkap, setErrorNamaLengkap] = React.useState('')
  const [errorTempatLahir, setErrorTempatLahir] = React.useState('')
  const [errorKepalaKeluarga, setErrorKepalaKeluarga] = React.useState('')
  const [errorKecamatan, setErrorKecamatan] = React.useState('')
  const [errorKelurahan, setErrorKelurahan] = React.useState('')

  return (
    <View>
      <View className='mb-4'>
        <InputText
          id='nik'
          label='NIK'
          subLabel='Jika ada'
          placeholder='Masukan NIK'
          value={NIK}
          onChange={(text) => setNIK(text)}
          errorMessage={errorNIK}
          setErrorMessage={setErrorNIK}
        />
      </View>
      <View className='mb-4'>
        <InputText
          required
          id='namaLengkap'
          label='Nama Lengkap'
          placeholder='Masukan Nama Lengkap'
          value={namaLengkap}
          onChange={(text) => setNamaLengkap(text)}
          errorMessage={errorNamaLengkap}
          setErrorMessage={setErrorNamaLengkap}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>jenis kelamin radio</Text>
      </View>
      <View className='mb-4'>
        <Text className='text-negative'>tempat dilahirkan radio</Text>
      </View>

      <View className='mb-4'>
        <InputText
          required
          id='tempatLahir'
          label='Tempat Kelahiran'
          placeholder='Masukan Tempat Kelahiran'
          value={tempatLahir}
          onChange={(text) => setTempatLahir(text)}
          errorMessage={errorTempatLahir}
          setErrorMessage={setErrorTempatLahir}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>tanggal lahir dateinput</Text>
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>jenis kelahiran radio</Text>
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>berat bayi number input</Text>
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>panjang bayi number input</Text>
      </View>

      <View className='mb-12'>
        <View className='mb-4'>
          <Text className='text-negative'>no kk search</Text>
        </View>
        <View className='mb-4'>
          <InputText
            id='kepalaKeluarga'
            label='Nama Kepala Keluarga'
            placeholder='Masukan Nama Kepala Keluarga'
            value={kepalaKeluarga}
            onChange={(text) => setKepalaKeluarga(text)}
            errorMessage={errorKepalaKeluarga}
            setErrorMessage={setErrorKepalaKeluarga}
            disabled
          />
        </View>
        <View className='mb-4'>
          <InputText
            id='kecamatan'
            label='Kecamatan'
            placeholder='Masukan Kecamatan'
            value={kecamatan}
            onChange={(text) => setKecamatan(text)}
            errorMessage={errorKecamatan}
            setErrorMessage={setErrorKecamatan}
            disabled
          />
        </View>
        <View className=''>
          <InputText
            id='kelurahan'
            label='Desa/Kelurahan'
            placeholder='Masukan Desa/Kelurahan'
            value={kelurahan}
            onChange={(text) => setKelurahan(text)}
            errorMessage={errorKelurahan}
            setErrorMessage={setErrorKelurahan}
            disabled
          />
        </View>
      </View>

      <TouchableOpacity
        // onPress={submitHandler}
        className='bg-secondary rounded-lg py-3 px-6 mb-14'
      >
        <Text className='text-white font-bold text-center'>
          Lanjut Isi Data Ibu
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function SectionDataIbu() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>no kk search</Text>
      </View>
    </View>
  )
}

function SectionDataAyah() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>no kk search</Text>
      </View>
    </View>
  )
}

function SectionDataPelapor() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>no kk search</Text>
      </View>
    </View>
  )
}

function SectionDataSaksi1() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>no kk search</Text>
      </View>
    </View>
  )
}

function SectionDataSaksi2() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>no kk search</Text>
      </View>
    </View>
  )
}

function SectionDataPengambilan() {
  const [lokasi, setLokasi] = React.useState('')
  const [errorLokasi, setErrorLokasi] = React.useState('')

  return (
    <View>
      <View className='mb-4'>
        <InputText
          required
          id='lokasi'
          label='Lokasi Pengambilan'
          placeholder='Masukan Lokasi'
          value={lokasi}
          onChange={(text) => setLokasi(text)}
          errorMessage={errorLokasi}
          setErrorMessage={setErrorLokasi}
        />
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>tanggal pengambilan dateinput</Text>
      </View>

      <View className='mb-4'>
        <Text className='text-negative'>layanan integrasi checkbox</Text>
      </View>
    </View>
  )
}

function SectionUnggahPersyaratan() {
  return (
    <View>
      <View className='mb-4'>
        <Text className='text-negative'>forms</Text>
      </View>
    </View>
  )
}
