import React, { useEffect } from 'react'
import { View } from 'react-native'
import InputSearch, { useSearchClicked } from '../../../components/InputSearch'
import useDummyData from '../../../store/useDummyData'
import BiodataPendaftar from '../../../components/layanan/BiodataPendaftar'
import FormCetakKia from '../../../components/layanan/FormCetakKia'
import useSectionLayanan from '../../../store/useSectionLayanan'

export default function CetakKIAPage() {
  const { setActiveSection } = useSectionLayanan()
  const isSearchClicked = useSearchClicked((s) => s.isSearchClicked)
  const { nikAnak } = useDummyData()

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: ['form', 'konfirmasi'],
    })
    setActiveSection()
  }, [])

  return (
    <View>
      <InputSearch
        name='nikAnak'
        title='Pencarian Biodata'
        label='Cari NIK Anak'
        placeholder='Masukan NIK Anak'
        defaultValues={{ nikAnak }}
      />
      {isSearchClicked && (
        <>
          <BiodataPendaftar />
          <FormCetakKia />
        </>
      )}
    </View>
  )
}
