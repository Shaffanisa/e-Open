import React from 'react'
import { Text, View } from 'react-native'
import InputText from '../../components/InputText'
import { useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import useDummyData from '../../store/useDummyData'
import { StatusBar } from 'expo-status-bar'
import { ButtonPrimary, ButtonSecondary } from '../../components/Button'

type FormData = {
  email: string
  noHp: string
  password: string
}

export default function UbahData() {
  const router = useRouter()
  const { email, noHp, password } = useDummyData()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email, noHp, password },
  })

  const onSubmit = (values: FormData) => {
    console.log(values)
  }

  return (
    <>
      <StatusBar style='dark' />
      <Text className='text-base font-bold text-center pt-6 pb-4'>
        UbahData
      </Text>

      <View className='mb-20'>
        <InputText
          name='email'
          control={control}
          rules={{ required: true }}
          label='Email'
          placeholder='Masukan Email Anda'
          errorMsg={errors.email?.message}
        />
        <InputText
          isSecured
          name='password'
          control={control}
          rules={{ required: true }}
          label='Kata Sandi'
          placeholder='Masukan Kata Sandi Anda'
          errorMsg={errors.password?.message}
        />
        <View className='mb-8'>
          <InputText
            name='noHp'
            control={control}
            rules={{ required: true }}
            label='No. HP'
            placeholder='Masukan No. HP Anda'
            errorMsg={errors.noHp?.message}
          />
        </View>

        <ButtonPrimary title='Ubah Data' onPress={() => router.back()} />
        <ButtonSecondary title='Batal' onPress={() => router.back()} />
      </View>
    </>
  )
}
