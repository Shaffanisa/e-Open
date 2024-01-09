import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import InputSearch, { useSearchClicked } from '../InputSearch'
import useDummyData from '../../store/useDummyData'
import useSectionLayanan from '../../store/useSectionLayanan'
import { useForm } from 'react-hook-form'
import InputText from '../InputText'
import InputDate from '../InputDate'
import InputRadio from '../InputRadio'
import { ButtonPrimary } from '../Button'

type FormData = {
  nik: string
  namaLengkap: string
  jenisKelamin: string
  agama: string
  tempatLahir: string
  tanggalLahir: string
  jamLahir: string
  anakKe: string
  tempatKematian: string
  namaRumahSakit: string
  kotaRumahSakit: string
  alamatRumahSakit: string
  sebabKematian: string
  yangMenerangkan: string
  noKK: string
  namaKepalaKeluarga: string
  kecamatan: string
  kelurahan: string
  alamat: string
  rt: string
  rw: string
}

export default function FormDataKematian() {
  const { dataKematian } = useDummyData()
  const { isSearchClicked } = useSearchClicked()
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<Date | undefined>()

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: dataKematian,
  })

  const searchKKResult = [
    { name: 'namaKepalaKeluarga', label: 'Nama Kepala Keluarga' },
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'kelurahan', label: 'Desa/Kelurahan' },
    { name: 'alamat', label: 'Alamat' },
    { name: 'rt', label: 'RT' },
    { name: 'rw', label: 'RW' },
  ]

  return (
    <View className='pb-16'>
      <InputText
        name='nik'
        control={control}
        label='NIK'
        subLabel='Jika ada'
        placeholder='Masukan NIK'
        errorMsg={errors.nik?.message}
      />
      <InputText
        required
        name='namaLengkap'
        control={control}
        rules={{ required: true }}
        label='Nama Lengkap'
        placeholder='Masukan Nama Lengkap'
        errorMsg={errors.namaLengkap?.message}
      />
      <InputRadio
        name='jenisKelamin'
        control={control}
        optionList={[
          { name: 'Laki - Laki', value: 'laki-laki' },
          { name: 'Perempuan', value: 'perempuan' },
        ]}
        label='Jenis Kelamin'
        errorMsg={errors.jenisKelamin?.message}
      />
      <InputRadio
        name='agama'
        control={control}
        optionList={[
          { name: 'Islam', value: 'islam' },
          { name: 'Katolik', value: 'katolik' },
          { name: 'Buddha', value: 'buddha' },
          { name: 'Kristen', value: 'kristen' },
          { name: 'Hindu', value: 'hindu' },
          { name: 'Khonghucu', value: 'khonghucu' },
          { name: 'Lainnya', value: 'lainnya' },
        ]}
        label='Agama'
        errorMsg={errors.agama?.message}
      />
      <InputText
        required
        name='tempatLahir'
        control={control}
        rules={{ required: true }}
        label='Tempat Kelahiran'
        placeholder='Masukan Tempat Kelahiran'
        errorMsg={errors.tempatLahir?.message}
      />
      <InputDate
        required
        name='tanggalLahir'
        label='Tanggal Lahir'
        date={date}
        setDate={setDate}
      />
      <InputDate
        required
        timePicker
        name='jamLahir'
        label='Pukul/Jam'
        date={time}
        setDate={setTime}
      />
      <InputText
        required
        name='anakKe'
        control={control}
        rules={{ required: true }}
        label='Anak Ke'
        placeholder='Masukan Anak Ke'
        errorMsg={errors.anakKe?.message}
      />

      <Text className='text-lg font-bold mb-4'>Data Rumah Sakit</Text>
      <InputText
        required
        disabled
        name='tempatKematian'
        control={control}
        label='Tempat Kematian'
      />
      <InputText
        required
        name='namaRumahSakit'
        control={control}
        rules={{ required: true }}
        label='Nama Rumah Sakit'
        placeholder='Masukan Nama Rumah Sakit'
        errorMsg={errors.namaRumahSakit?.message}
      />
      <InputText
        required
        name='kotaRumahSakit'
        control={control}
        rules={{ required: true }}
        label='Kota Rumah Sakit'
        placeholder='Masukan Kota Rumah Sakit'
        errorMsg={errors.kotaRumahSakit?.message}
      />
      <InputText
        required
        name='alamatRumahSakit'
        control={control}
        rules={{ required: true }}
        label='Alamat Rumah Sakit'
        placeholder='Masukan Alamat Rumah Sakit'
        errorMsg={errors.alamatRumahSakit?.message}
      />
      <InputRadio
        name='sebabKematian'
        control={control}
        optionList={[
          { name: 'Sakit/Tua', value: 'sakit/tua' },
          { name: 'Kecelakaan', value: 'kecelakaan' },
          { name: 'Bunuh Diri', value: 'bunuh-diri' },
          { name: 'Pandemi/Wabah', value: 'wabah' },
          { name: 'Kriminalitas', value: 'kriminalitas' },
          { name: 'Lainnya', value: 'lainnya' },
        ]}
        label='Sebab Kematian'
        errorMsg={errors.sebabKematian?.message}
      />
      <InputRadio
        name='yangMenerangkan'
        control={control}
        optionList={[
          { name: 'Dokter', value: 'dokter' },
          { name: 'Bidan/Perawat', value: 'bidan' },
        ]}
        label='Yang Menerangkan'
        errorMsg={errors.yangMenerangkan?.message}
      />
      <View className='mb-4'>
        <InputSearch
          name='noKK'
          title='Data Kartu Keluarga'
          label='No. Kartu Keluarga'
          placeholder='Masukan No. Kartu Keluarga'
          defaultValues={{ noKK: dataKematian.noKK }}
        />
        {isSearchClicked &&
          searchKKResult.map((item) => (
            <InputText
              disabled
              key={item.name}
              name={item.name}
              control={control}
              label={item.label}
            />
          ))}
      </View>

      <ButtonPrimary
        title='Lanjut Isi Data Ibu'
        disabled={!isSearchClicked}
        onPress={() => {
          setActiveSection(activeSectionIdx + 1)
          useSearchClicked.setState({ isSearchClicked: false })
        }}
      />
    </View>
  )
}
