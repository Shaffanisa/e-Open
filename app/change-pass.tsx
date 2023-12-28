import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import HeaderAccentOne from '../components/HeaderAccentOne'
import { Entypo } from '@expo/vector-icons'
import InputText from '../components/InputText'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import useDummyData from '../store/useDummyData'

export default function ChangePassPage() {
  const router = useRouter()
  const [isPage1, setIsPage1] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  const submitHandler = () => {
    isPage1 ? setIsPage1(!isPage1) : setIsSuccess(true)
  }

  return (
    <ScrollView className='flex-1' contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar style='dark' />
      <HeaderAccentOne />
      <View className='pt-10'>
        <Pressable onPress={() => router.back()} className='p-4 mb-6'>
          <Entypo name='chevron-small-left' size={24} color='#202020' />
        </Pressable>
        <View className='px-4'>
          {isSuccess ? (
            <>
              <SuccessPage />
              <TouchableOpacity
                onPress={() => router.push('/')}
                className='bg-secondary rounded-lg py-3 px-6 disabled:bg-opacity-40'
              >
                <Text className='text-white font-bold text-center'>Masuk</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {isPage1 ? <Page1 /> : <Page2 />}
              <TouchableOpacity
                onPress={submitHandler}
                className='bg-secondary rounded-lg py-3 px-6 disabled:bg-opacity-40'
              >
                <Text className='text-white font-bold text-center'>Kirim</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

function Page1() {
  const { email } = useDummyData()

  const {
    control,
    formState: { errors },
  } = useForm<{ email: string }>({ defaultValues: { email } })

  return (
    <>
      <Text className='-mt-4 text-xl font-bold mb-2'>
        Lupa <Text className='text-primary'>Kata Sandi?</Text>
      </Text>
      <Text className='text-content-tertiary text-[14px] leading-4 mb-6'>
        Masukkan email anda ya untuk mengatur ulang kata sandi
      </Text>

      <InputText
        name='email'
        control={control}
        rules={{ required: true }}
        placeholder='Masukan Email Anda'
        errorMsg={errors.email?.message}
      />

      <Text className='text-content-tertiary text-[14px] leading-4 mb-4'>
        *Kami akan mengirim pesan melalui email untuk mengatur ulang kata sandi
        baru
      </Text>
    </>
  )
}

function Page2() {
  const { password } = useDummyData()

  const {
    control,
    formState: { errors },
  } = useForm<{ newPass: string; newPass2: string }>({
    defaultValues: { newPass: password, newPass2: password },
  })

  return (
    <>
      <Text className='-mt-4 text-xl font-bold mb-2'>
        Ayo Buat <Text className='text-primary'>Kata Sandi Baru!</Text>
      </Text>
      <Text className='text-content-tertiary text-[14px] leading-4 mb-6'>
        Masukkan kata sandi baru untuk mengembalikan akun anda
      </Text>

      <InputText
        isSecured
        name='newPass'
        control={control}
        rules={{ required: true }}
        label='Kata Sandi Baru'
        placeholder='Masukan Kata Sandi Baru Anda'
        errorMsg={errors.newPass?.message}
      />
      <InputText
        isSecured
        name='newPass2'
        control={control}
        rules={{ required: true }}
        label='Kata Sandi Baru'
        placeholder='Masukan Kata Sandi Baru Anda'
        errorMsg={errors.newPass2?.message}
      />
    </>
  )
}

function SuccessPage() {
  return (
    <>
      <Text className='-mt-4 text-xl font-bold mb-2'>
        Selamat Pembuatan Kata Sandi Baru Anda Berhasil
      </Text>
      <Text className='text-content-tertiary text-[14px] leading-4 mb-6'>
        Anda sudah dapat login menggunakan kata sandi baru
      </Text>

      <Image
        source={require('../assets/images/success-fig.png')}
        className='w-full mb-10'
        resizeMode='contain'
      />
    </>
  )
}
