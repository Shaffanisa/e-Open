import { View, Text } from 'react-native'
import useDummyData from '../../store/useDummyData'
import { useForm } from 'react-hook-form'
import InputText from '../InputText'

type FormData = {
  namaKepalaKeluarga: string
  alamat: string
  rt: string
  rw: string
  kodePos: string
}

export default function DataKeluarga() {
  const { namaKepalaKeluarga, alamat, rt, rw, kodePos } = useDummyData()

  const { control } = useForm<FormData>({
    defaultValues: { namaKepalaKeluarga, alamat, rt, rw, kodePos },
  })

  const dataList = [
    { name: 'namaKepalaKeluarga', label: 'Nama Kepala Keluarga' },
    { name: 'alamat', label: 'Alamat' },
    { name: 'rt', label: 'No. RT' },
    { name: 'rw', label: 'No. RW' },
    { name: 'kodePos', label: 'Kode Pos' },
  ]

  return (
    <View>
      <View className='h-[1px] bg-[#E8E8E8] mb-5' />
      <Text className='text-lg font-bold mb-4'>Data Keluarga</Text>
      {dataList.map((item) => (
        <InputText
          disabled
          key={item.name}
          name={item.name}
          control={control}
          label={item.label}
        />
      ))}
    </View>
  )
}
