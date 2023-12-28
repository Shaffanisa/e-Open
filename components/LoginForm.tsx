import React from 'react'
import { Link, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import { View, Text, TouchableOpacity } from 'react-native'
import InputText from './InputText'
import useDummyData from '../store/useDummyData'

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const router = useRouter()
  const { email, password } = useDummyData()

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: { email, password },
  })

  const onSubmit = (val: FormData) => {
    const isEmail = val.email === email
    const isPassword = val.password === password

    if (isEmail && isPassword) {
      router.push('/beranda')
    } else {
      !isEmail &&
        setError('email', { message: 'Email yang anda masukan salah' })
      !isPassword &&
        setError('password', { message: 'Kata Sandi yang anda masukan salah' })
    }
  }

  return (
    <View className='mb-4 px-4'>
      <InputText
        name='email'
        label='Email'
        control={control}
        rules={{ required: true }}
        placeholder='Masukan Email Anda'
        errorMsg={errors.email?.message}
      />
      <InputText
        isSecured
        name='password'
        label='Kata Sandi'
        control={control}
        rules={{ required: true }}
        placeholder='Masukan Kata Sandi Anda'
        errorMsg={errors.password?.message}
      />
      <Link
        href='/change-pass'
        className='text-secondary font-medium ml-auto mb-4'
      >
        Lupa Password?
      </Link>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className='bg-secondary rounded-lg py-3 px-6'
      >
        <Text className='text-white font-bold text-center'>Masuk</Text>
      </TouchableOpacity>
    </View>
  )
}
