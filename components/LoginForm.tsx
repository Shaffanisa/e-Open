import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import InputText from './InputText'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const submitHandler = () => {
    const user = {
      email: 'nataliajessica@gmail.com',
      password: 'natalia12345678',
    }

    setErrorEmail('')
    setErrorPassword('')
    if (email === user.email && password === user.password) {
      router.push('/home')
    } else {
      if (email !== user.email) setErrorEmail('Email yang anda masukan salah')
      if (password !== user.password)
        setErrorPassword('Kata Sandi yang anda masukan salah')

      console.log('credential error', { errorEmail, errorPassword })
    }
  }

  return (
    <View className='mb-4 px-4'>
      <View className='mb-6'>
        <InputText
          id='email'
          label='Email'
          placeholder='Masukan Email Anda'
          value={email}
          onChange={(text) => setEmail(text)}
          errorMessage={errorEmail}
          setErrorMessage={setErrorEmail}
        />
      </View>
      <View className='mb-4'>
        <InputText
          id='password'
          label='Kata Sandi'
          placeholder='Masukan Kata Sandi Anda'
          isSecured
          value={password}
          onChange={(text) => setPassword(text)}
          errorMessage={errorPassword}
          setErrorMessage={setErrorPassword}
        />
      </View>

      <Link
        href='/change-pass'
        className='text-secondary font-medium ml-auto mb-4'
      >
        Lupa Password?
      </Link>

      <TouchableOpacity
        onPress={submitHandler}
        className='bg-secondary rounded-lg py-3 px-6'
      >
        <Text className='text-white font-bold text-center'>Masuk</Text>
      </TouchableOpacity>
    </View>
  )
}
