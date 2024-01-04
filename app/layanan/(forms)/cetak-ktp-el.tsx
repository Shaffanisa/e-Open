import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import InputSearch, { useSearchClicked } from '../../../components/InputSearch'
import useDummyData from '../../../store/useDummyData'
import BiodataPendaftar from '../../../components/layanan/BiodataPendaftar'
import FormCetakKTP from '../../../components/layanan/FormCetakKTP'
import useSectionLayanan from '../../../store/useSectionLayanan'
import InputRadio from '../../../components/InputRadio'
import { useForm } from 'react-hook-form'

export default function CetakKTPELPage() {
  const isSearchClicked = useSearchClicked((s) => s.isSearchClicked)
  const { setActiveSection } = useSectionLayanan()

  const [isUbahKTP, setIsUbahKTP] = useState(false)
  const { nik } = useDummyData()

  const { control } = useForm({
    defaultValues: {
      statusPencetakan: 'cetakBaru',
    },
  })

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: ['form', 'konfirmasi'],
    })
    setActiveSection()
  }, [])

  return (
    <View className='pb-20'>
      <InputRadio
        flexCol
        control={control}
        name='statusPencetakan'
        label='Status Pencetakan'
        optionList={[
          { name: 'Pencetakan KTP Baru', value: 'cetakBaru' },
          { name: 'Perubahan Elemen Data', value: 'ubahData' },
        ]}
        customHandler={(val) => setIsUbahKTP(val === 'ubahData')}
      />
      <InputSearch
        name='nik'
        title='Pencarian Biodata'
        label='Cari NIK'
        placeholder='Masukan NIK'
        defaultValues={{ nik }}
      />
      {isSearchClicked && (
        <>
          <BiodataPendaftar />
          {isUbahKTP ? <FormCetakKTP isUbah /> : <FormCetakKTP />}
        </>
      )}
    </View>
  )
}
