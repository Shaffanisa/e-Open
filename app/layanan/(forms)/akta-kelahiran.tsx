import React, { useEffect } from 'react'
import { View } from 'react-native'
import useSectionLayanan from '../../../store/useSectionLayanan'
import { sectionLayanan } from '../../../data'

import SectionSelect from '../../../components/layanan/SectionSelect'
import FormDataKelahiran from '../../../components/layanan/FormDataKelahiran'
import FormCariData from '../../../components/layanan/FormCariData'
import FormDataPengambilan from '../../../components/layanan/FormDataPengambilan'
import FormBerkasPersyaratan from '../../../components/layanan/FormBerkasPersyaratan'
import Konfirmasi from '../../../components/layanan/Konfirmasi'
import useDummyData from '../../../store/useDummyData'

export default function AktaKelahiranPage() {
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const onSection = sectionList.map((section) => activeSection === section)
  const { dataIbu, dataAyah, dataPelapor, dataSaksi11, dataSaksi12 } =
    useDummyData()

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: sectionLayanan['akta-kelahiran'],
    })
    setActiveSection()
  }, [])

  const berkasList = [
    { name: 'form-f-2.01', label: 'Form F-2.01' },
    { name: 'sptjm', label: 'Surat Keterangan Lahir/SPTJM (ASLI)' },
    { name: 'akta-nikah', label: 'Buku Akta Nikah (ASLI)' },
    { name: 'ktp', label: 'Foto KTP (ASLI)' },
    { name: 'kk', label: 'Foto Kartu Keluarga (ASLI)' },
    { name: 'ijazah', label: 'Foto Ijazah untuk akta kelahiran dewasa (ASLI)' },
  ]

  return (
    <View>
      <SectionSelect />
      <View className='h-[1px] bg-[#E8E8E8] mt-6' />
      {[
        <FormDataKelahiran />,
        <FormCariData label='NIK Ibu' data={dataIbu} />,
        <FormCariData label='NIK Ayah' data={dataAyah} />,
        <FormCariData label='NIK Pelapor' data={dataPelapor} />,
        <FormCariData label='NIK Saksi 1' data={dataSaksi11} />,
        <FormCariData label='NIK Saksi 2' data={dataSaksi12} />,
        <FormDataPengambilan />,
        <FormBerkasPersyaratan berkasList={berkasList} />,
        <Konfirmasi />,
      ].map((Component, i) => (
        <View key={i} className={`my-6 ${onSection[i] ? 'block' : 'hidden'}`}>
          {Component}
        </View>
      ))}
    </View>
  )
}
