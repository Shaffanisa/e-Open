import React, { useEffect } from 'react'
import { View } from 'react-native'
import FormDataKematian from '../../../components/layanan/FormDataKematian'
import SectionSelect from '../../../components/layanan/SectionSelect'
import FormCariData from '../../../components/layanan/FormCariData'
import FormDataPengambilan from '../../../components/layanan/FormDataPengambilan'
import FormBerkasPersyaratan from '../../../components/layanan/FormBerkasPersyaratan'
import useSectionLayanan from '../../../store/useSectionLayanan'
import Konfirmasi from '../../../components/layanan/Konfirmasi'
import { sectionLayanan } from '../../../data'
import useDummyData from '../../../store/useDummyData'

export default function AktaKematianPage() {
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const onSection = sectionList.map((section) => activeSection === section)
  const { dataIbu, dataAyah, dataPelapor, dataSaksi21, dataSaksi22 } =
    useDummyData()

  useEffect(() => {
    useSectionLayanan.setState({
      sectionList: sectionLayanan['akta-kematian'],
    })
    setActiveSection()
  }, [])

  const berkasList = [
    { name: 'form-f-2.01', label: 'Form F-2.01' },
    {
      name: 'ktp-akta-lahir-pelapor',
      label: 'Fotocopy KTP dan Akta Kelahiran Pelapor',
    },
    { name: 'kk', label: 'Fotocopy KK' },
    {
      name: 'akta-lahir/ijazah-almarhum',
      label: 'Fotocopy Akta Kelahiran atau Ijazah (Almarhum)',
    },
    {
      name: 'ket-kematian-kel',
      label: 'Keterangan Kematian dari Kelurahan (ASLI)',
    },
    {
      name: 'ket-kematian-rs',
      label: 'Keterangan Kematian dari Rumah Sakit (ASLI)',
    },
    {
      name: 'akta-nikah',
      label: 'Fotocopy Buku/Akta Nikah',
    },
    {
      name: 'ktp-saksi',
      label: 'Fotocopy KTP-EL Saksi',
    },
  ]

  return (
    <View>
      <SectionSelect />
      <View className='h-[1px] bg-[#E8E8E8] mt-6' />
      {[
        <FormDataKematian />,
        <FormCariData label='NIK Ibu' data={dataIbu} />,
        <FormCariData label='NIK Ayah' data={dataAyah} />,
        <FormCariData label='NIK Pelapor' data={dataPelapor} />,
        <FormCariData label='NIK Saksi 1' data={dataSaksi21} />,
        <FormCariData label='NIK Saksi 2' data={dataSaksi22} />,
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
