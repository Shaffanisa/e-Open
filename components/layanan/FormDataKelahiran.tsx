import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import InputText from '../InputText'
import InputSearch, { useSearchClicked } from '../InputSearch'
import useDummyData from '../../store/useDummyData'
import InputDate from '../InputDate'
import useSectionLayanan from '../../store/useSectionLayanan'
import { ButtonPrimary } from '../Button'
import InputRadio from '../InputRadio'

type FormData = {
  nik: string
  namaLengkap: string
  jenisKelamin: string
  tempatDilahirkan: string
  tempatLahir: string
  tanggalLahir: string
  jamLahir: string
  jenisKelahiran: string
  kelahiranKe: string
  penolongKelahiran: string
  beratBayi: string
  panjangBayi: string
  noKK: string
  namaKepalaKeluarga: string
  kecamatan: string
  kelurahan: string
}

export default function FormDataKelahiran() {
  const { dataKelahiran } = useDummyData()
  const { isSearchClicked, toggleSearchBtn } = useSearchClicked()
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<Date | undefined>()

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: dataKelahiran,
  })

  const searchKKResult = [
    { name: 'namaKepalaKeluarga', label: 'Nama Kepala Keluarga' },
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'kelurahan', label: 'Desa/Kelurahan' },
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
        name='tempatDilahirkan'
        control={control}
        optionList={[
          { name: 'RS/RB', value: 'rs/rb' },
          { name: 'Polindes', value: 'polindes' },
          { name: 'Lainnya', value: 'lainnya' },
          { name: 'Puskesmas', value: 'puskesmas' },
          { name: 'Rumah', value: 'rumah' },
        ]}
        label='Tempat Dilahirkan'
        errorMsg={errors.tempatDilahirkan?.message}
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

      <InputRadio
        name='jenisKelahiran'
        control={control}
        optionList={[
          { name: 'Tunggal', value: 'tunggal' },
          { name: 'Kembar 3', value: 'kembar-3' },
          { name: 'Lainnya', value: 'lainnya' },
          { name: 'Kembar 2', value: 'kembar-2' },
          { name: 'Kembar 4', value: 'kembar-4' },
        ]}
        label='Jenis Kelahiran'
        errorMsg={errors.jenisKelahiran?.message}
      />

      <InputText
        required
        name='kelahiranKe'
        control={control}
        rules={{ required: true }}
        label='Kelahiran Ke'
        placeholder='Masukan Jumlah Kelahiran'
        errorMsg={errors.kelahiranKe?.message}
      />

      <InputRadio
        basisTwo
        name='penolongKelahiran'
        control={control}
        optionList={[
          { name: 'Dokter', value: 'dokter' },
          { name: 'Dukun', value: 'dukun' },
          { name: 'Bidan/Perawat', value: 'bidan' },
          { name: 'Lainnya', value: 'lainnya' },
        ]}
        label='Penolong Kelahiran'
        errorMsg={errors.penolongKelahiran?.message}
      />

      <InputText
        required
        numPad
        unit='Kg'
        name='beratBayi'
        control={control}
        rules={{ required: true }}
        label='Berat Bayi'
        placeholder='0'
        errorMsg={errors.beratBayi?.message}
      />

      <InputText
        required
        numPad
        unit='Cm'
        name='panjangBayi'
        control={control}
        rules={{ required: true }}
        label='Panjang Bayi'
        placeholder='0'
        errorMsg={errors.panjangBayi?.message}
      />

      <View className='mb-4'>
        <InputSearch
          name='noKK'
          label='No. Kartu Keluarga'
          placeholder='Masukan No. Kartu Keluarga'
          defaultValues={{ noKK: dataKelahiran.noKK }}
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
          toggleSearchBtn()
        }}
      />
    </View>
  )
}
