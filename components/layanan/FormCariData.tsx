import { View } from 'react-native'
import { useForm } from 'react-hook-form'
import InputSearch, { useSearchClicked } from '../InputSearch'
import useDummyData from '../../store/useDummyData'
import useSectionLayanan from '../../store/useSectionLayanan'
import InputText from '../InputText'
import { ButtonPrimary, ButtonSecondary } from '../Button'

type FormData = {
  noKK: string
  namaLengkap: string
  tanggalLahir?: string
  pekerjaan: string
  umur?: string
  tanggalPerkawinan?: string
  alamat: string
  rt: string
  rw: string
  provinsi: string
  kota: string
  kecamatan: string
  kelurahan: string
}

interface IProps {
  label: string
  data?: FormData
}

export default function FormCariData({ label, data }: IProps) {
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const { isSearchClicked, toggleSearchBtn } = useSearchClicked()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)
  const { nik } = useDummyData()
  const isOrtu = label.includes('Ibu') || label.includes('Ayah')

  const { control } = useForm<FormData>({
    defaultValues: data,
  })

  const resultList = [
    { name: 'noKK', label: 'No. Kartu Keluarga' },
    { name: 'namaLengkap', label: 'Nama Lengkap' },
    {
      name: isOrtu ? 'tanggalLahir' : 'umur',
      label: isOrtu ? 'Tanggal Lahir' : 'Umur',
    },
    { name: 'pekerjaan', label: 'Pekerjaan' },
  ]

  isOrtu &&
    resultList.push({ name: 'tanggalPerkawinan', label: 'Tanggal Perkawinan' })

  const dataWilayah = [
    { name: 'alamat', label: 'Alamat' },
    { name: 'rt', label: 'No. RT' },
    { name: 'rw', label: 'No. RW' },
    { name: 'provinsi', label: 'Provinsi' },
    { name: 'kota', label: 'Kota/Kabupaten' },
    { name: 'kecamatan', label: 'Kecamatan' },
    { name: 'kelurahan', label: 'Desa/Kelurahan' },
  ]

  const list = resultList.concat(dataWilayah)

  return (
    <View>
      <InputSearch
        name='nik'
        label={label}
        placeholder='Masukan NIK'
        defaultValues={{ nik }}
      />
      {isSearchClicked && (
        <View className='mb-10'>
          <View className='mb-12'>
            {list.map((item) => (
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
            title={`Lanjut Isi ${sectionList[activeSectionIdx + 1]}`}
            onPress={() => {
              setActiveSection(activeSectionIdx + 1)
              toggleSearchBtn()
            }}
          />
          <ButtonSecondary
            title='Kembali'
            onPress={() => setActiveSection(activeSectionIdx - 1)}
          />
        </View>
      )}
    </View>
  )
}
