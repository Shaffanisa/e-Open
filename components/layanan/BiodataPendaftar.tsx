import { Text, View } from 'react-native'

export default function BiodataPendaftar() {
  return (
    <View className='rounded-[4px] border border-[#DEDEDE] bg-white py-3 px-4'>
      <Text className='font-bold py-2 px-4'>Biodata Pendaftar</Text>

      <View className='h-[1px] bg-[#E8E8E8] my-3' />

      <View className='py-2 px-4 mb-3'>
        <Text className='text-[10px] font-bold mb-2'>Alamat</Text>
        <Text className='text-[10px]'>
          Jl. Juanda no 12 Kec. Bekasi Barat, Kel. Jakasampurna, RT 001, RW 004
        </Text>
      </View>

      <View className='py-2 px-4 mb-3'>
        <Text className='text-[10px] font-bold mb-2'>Nama Lengkap</Text>
        <Text className='text-[10px]'>Stephanie Wijaya</Text>
      </View>

      <View className='py-2 px-4 mb-3'>
        <Text className='text-[10px] font-bold mb-2'>
          Tempat & Tanggal Lahir
        </Text>
        <Text className='text-[10px]'>Bekasi, 30-11-2023</Text>
      </View>

      <View className='py-2 px-4 mb-3'>
        <Text className='text-[10px] font-bold mb-2'>Agama</Text>
        <Text className='text-[10px]'>Islam</Text>
      </View>

      <View className='py-2 px-4'>
        <Text className='text-[10px] font-bold mb-2'>Golongan Darah</Text>
        <Text className='text-[10px]'>AB</Text>
      </View>
    </View>
  )
}
