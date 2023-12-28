import React from 'react'
import { View, Text, Image } from 'react-native'
import InputText from '../../components/InputText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import InputSearch from '../../components/InputSearch'
import { useForm } from 'react-hook-form'

export default function CetakKIAPage() {
  return (
    <View>
      <InputSearch
        name='nikAnak'
        label='Cari NIK Anak'
        placeholder='Masukan NIK Anak'
        defaultValues={{ nikAnak: '' }}
      />
      <BiodataPendaftar />
      <FormPermohonan />
    </View>
  )
}

function BiodataPendaftar() {
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

function FormPermohonan() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ lokasiPengambilan: string; tglPengambilan: string }>({
    defaultValues: {
      lokasiPengambilan: '',
      tglPengambilan: '',
    },
  })

  return (
    <View className='pb-20'>
      <View className='h-[1px] bg-[#E8E8E8] my-5' />
      <Text className='text-lg font-bold mb-5'>Data Pengambilan</Text>
      <InputText
        control={control}
        rules={{ required: true }}
        name='lokasi'
        label='Lokasi Pengambilan'
        placeholder='Masukan Lokasi'
        errorMsg={errors.lokasiPengambilan?.message}
      />

      <View className='mb-5'>
        <Text className='text-negative'>tanggal pengambilan dateinput</Text>
      </View>

      <View className='h-[1px] bg-[#E8E8E8] my-5' />

      <Text className='text-lg font-bold mb-5'>Persyaratan</Text>

      <View className='mb-5'>
        <Text className='text-negative'>dropzone form f-1.02</Text>
      </View>

      <View className='mb-5'>
        <Text className='text-negative'>dropzone fotkop kk</Text>
      </View>

      <View className='mb-5'>
        <Text className='text-negative'>dropzone fotkop ktp ortu</Text>
      </View>

      <View className='mb-5'>
        <Text className='text-negative'>dropzone fotkop buku nikah ortu</Text>
      </View>

      <View className='mb-5'>
        <Text className='text-negative'>dropzone fotkop akta kelahiran</Text>
      </View>

      <View className='mb-20'>
        <Text className='text-negative'>dropzone pas photo 2x3</Text>
      </View>

      <View className='mb-5'>
        <Text className='text-negative'>checkbox</Text>
      </View>

      <TouchableOpacity
        // onPress={submitHandler}
        className='bg-secondary rounded-lg py-3 px-6'
      >
        <Text className='text-white font-bold text-center'>
          Daftar Permohonan
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function KonfirmasiPermohonan() {
  return (
    <View>
      <Text className='text-base font-bold text-center mb-5'>
        Selesaikan Permohonan
      </Text>
      <Image
        source={require('../../assets/images/permohonan-confirm-fig.png')}
        className='w-full mb-5 px-8'
        resizeMode='contain'
      />

      <Text className='text-content-tertiary text-base mb-12'>
        Pastikan sebelum anda menyelesaikan pendaftaran, data yang telah anda
        isi sudah benar
      </Text>

      <TouchableOpacity
        // onPress={submitHandler}
        className='bg-secondary border border-secondary rounded-lg py-3 px-6 mb-3'
      >
        <Text className='text-white font-bold text-center'>
          Daftar Permohonan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={submitHandler}
        className='bg-white border border-secondary rounded-lg py-3 px-6'
      >
        <Text className='text-secondary font-bold text-center'>
          Periksa Kembali
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function PermohonanBerhasil() {
  return (
    <View>
      <Text className='text-base font-bold text-center mb-5'>
        Permohonan Berhasil Didaftar
      </Text>
      <Image
        source={require('../../assets/images/permohonan-success-fig.png')}
        className='w-full mb-5 px-8'
        resizeMode='contain'
      />

      <Text className='text-content-tertiary text-base mb-12'>
        Mohon bersabar ya, berkas anda akan segera kami verifikasi. Kami sudah
        mengirimkan datail pendaftaran pada email
      </Text>

      <TouchableOpacity
        // onPress={submitHandler}
        className='bg-secondary border border-secondary rounded-lg py-3 px-6 mb-3'
      >
        <Text className='text-white font-bold text-center'>
          Kembali Ke Beranda
        </Text>
      </TouchableOpacity>
    </View>
  )
}
