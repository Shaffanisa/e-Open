import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import InputSearch, { useSearchClicked } from '../../../components/InputSearch'
import useDummyData from '../../../store/useDummyData'
import InputText from '../../../components/InputText'
import { useForm } from 'react-hook-form'
import FormSKPWNI from '../../../components/layanan/FormSKPWNI'
import useSectionLayanan from '../../../store/useSectionLayanan'

export default function SKPWNIPage() {
  const isSearchClicked = useSearchClicked((s) => s.isSearchClicked)
  const { setActiveSection } = useSectionLayanan()
  const { noKKSKPWNI, namaKepalaKeluarga } = useDummyData()

  const { control } = useForm({
    defaultValues: {
      namaKepalaKeluarga,
    },
  })

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: ['form', 'konfirmasi'],
    })
    setActiveSection()
  }, [])

  return (
    <View>
      <InputSearch
        name='noKK'
        title='Pencarian Kartu Keluarga'
        label='Cari No. Kartu Keluarga'
        placeholder='Masukan No. Kartu Keluarga'
        defaultValues={{ noKK: noKKSKPWNI }}
      />

      {isSearchClicked && (
        <>
          <View>
            <Text className='text-lg font-bold mb-4'>Data Keluarga</Text>
            <InputText
              required
              disabled
              control={control}
              rules={{ required: true }}
              name='namaKepalaKeluarga'
              label='Nama Kepala Keluarga'
            />
          </View>
          <FormSKPWNI />
        </>
      )}
    </View>
  )
}
