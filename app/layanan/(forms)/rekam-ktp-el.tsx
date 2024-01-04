import React, { useEffect } from 'react'
import { View } from 'react-native'
import InputSearch, { useSearchClicked } from '../../../components/InputSearch'
import useDummyData from '../../../store/useDummyData'
import BiodataPendaftar from '../../../components/layanan/BiodataPendaftar'
import FormRekamKTP from '../../../components/layanan/FormRekamKTP'
import useSectionLayanan from '../../../store/useSectionLayanan'

export default function RekamKTPELPage() {
  const isSearchClicked = useSearchClicked((s) => s.isSearchClicked)
  const { setActiveSection } = useSectionLayanan()
  const { nik } = useDummyData()

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: ['form', 'konfirmasi'],
    })
    setActiveSection()
  }, [])

  return (
    <View className='pb-20'>
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
          <FormRekamKTP />
        </>
      )}
    </View>
  )
}
