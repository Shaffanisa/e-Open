import { Feather } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

export default function CheckboxAnggotaKeluarga() {
  return (
    <View className='border border-[#DADADA] rounded-lg'>
      <View className='py-2 px-4 border-b border-[#DADADA]'>
        <Text className='font-bold text-content-primary'>Data Keluarga</Text>
      </View>
      <View className='py-1'>
        <CheckboxItem title='Kepala Keluarga' />
        <CheckboxItem title='Istri' />
        <CheckboxItem title='Anak' />
      </View>
    </View>
  )
}

interface IProps {
  title: string
}

function CheckboxItem({ title }: IProps) {
  const [isChecked, setChecked] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (
    <View>
      <Pressable
        className='py-2 px-4 flex-row items-center'
        onPress={() => setOpen(!isOpen)}
      >
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#0C3C84' : undefined}
          className='border'
        />
        <Text className='font-bold text-[10px] mx-2 flex-1'>{title}</Text>
        <Text>
          {isOpen ? (
            <Feather name='chevron-up' size={24} color='#202020' />
          ) : (
            <Feather name='chevron-down' size={24} color='#202020' />
          )}
        </Text>
      </Pressable>
      {isOpen && (
        <View className='bg-background-secondary pt-2 px-4 mx-4 rounded-lg'>
          {[
            { key: 'Nama Lengkap', value: 'Natalia Jessica' },
            { key: 'Tempat & Tanggal Lahir', value: 'Bekasi, 30 July 1998' },
            { key: 'Jenis Kelamin', value: 'Perempuan' },
            { key: 'Agama', value: 'Islam' },
            { key: 'Golongan Darah', value: 'AB' },
          ].map((item) => (
            <View key={item.value} className='flex-row justify-between mb-2'>
              <Text className='text-[10px] text-content-secondary'>
                {item.key}
              </Text>
              <Text className='text-[10px] text-content-primary'>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
