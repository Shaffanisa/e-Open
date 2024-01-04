import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import InputText from '../components/InputText'
import Checkbox from 'expo-checkbox'
import { useForm } from 'react-hook-form'
import useDummyData from '../store/useDummyData'
import { ButtonPrimary } from './Button'

type FormData = {
  noKK: string
  nik: string
  email: string
  noHp: string
  password: string
}

export default function RegisterForm() {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false)
  const { noKK, nik, email, password, noHp } = useDummyData()

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { noKK, nik, email, password, noHp },
  })

  return (
    <View className='pb-14'>
      <InputText
        name='noKK'
        control={control}
        rules={{ required: true }}
        label='No. Kartu Keluarga'
        placeholder='Masukan No. Kartu Keluarga Anda'
        errorMsg={errors.noKK?.message}
      />
      <InputText
        name='nik'
        control={control}
        rules={{ required: true }}
        label='NIK'
        placeholder='Masukan NIK Anda'
        errorMsg={errors.nik?.message}
      />
      <InputText
        name='email'
        control={control}
        rules={{ required: true }}
        label='Email'
        placeholder='Masukan Email Anda'
        errorMsg={errors.email?.message}
      />
      <InputText
        name='noHp'
        control={control}
        rules={{ required: true }}
        label='No. HP'
        placeholder='Masukan No. HP Anda'
        errorMsg={errors.noHp?.message}
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

      <View className='mb-6 flex-row items-center'>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#0C3C84' : undefined}
        />
        <Text className='flex-1 ml-3 text-xs text-content-primary'>
          Dengan mengklik ini saya telah menyetujui{' '}
          <Text className='text-secondary font-bold'>syarat & ketentuan</Text>{' '}
          pelayanan aplikasi E-Open
        </Text>
      </View>

      <ButtonPrimary title='Daftar' onPress={() => router.push('/')} />
    </View>
  )
}
