import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import InputSearch, { useSearchClicked } from '../../../components/InputSearch'
import useDummyData from '../../../store/useDummyData'
import FormPenambahanJiwa from '../../../components/layanan/FormPenambahanJiwa'
import FormPenguranganJiwa from '../../../components/layanan/FormPenguranganJiwa'
import DataKeluarga from '../../../components/layanan/DataKeluarga'
import useSectionLayanan from '../../../store/useSectionLayanan'
import InputRadio from '../../../components/InputRadio'
import { useForm } from 'react-hook-form'

export default function KartuKeluargaPage() {
  const isSearchClicked = useSearchClicked((s) => s.isSearchClicked)
  const { setActiveSection } = useSectionLayanan()

  const { control } = useForm({
    defaultValues: {
      jenisKK: 'tambahJiwa',
    },
  })

  const [isPengurangan, setIsPengurangan] = useState(false)
  const { noKK } = useDummyData()

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: ['form', 'konfirmasi'],
    })
    setActiveSection()
  }, [])

  return (
    <View className='pb-20'>
      <InputRadio
        basisTwo
        control={control}
        name='jenisKK'
        label='Pilih Jenis KK'
        optionList={[
          { name: 'Penambahan Jiwa', value: 'tambahJiwa' },
          { name: 'Pengurangan Jiwa', value: 'kurangJiwa' },
        ]}
        customHandler={(val) => setIsPengurangan(val === 'kurangJiwa')}
      />
      <InputSearch
        name='noKK'
        title='Pencarian Kartu Keluarga'
        label='Cari No. Kartu Keluarga'
        placeholder='Masukan No. Kartu Keluarga'
        defaultValues={{ noKK }}
      />

      {isSearchClicked && (
        <>
          <DataKeluarga />
          {isPengurangan ? <FormPenguranganJiwa /> : <FormPenambahanJiwa />}
        </>
      )}
    </View>
  )
}
