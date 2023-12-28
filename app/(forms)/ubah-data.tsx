import React from 'react'
import { Text, View } from 'react-native'
import InputText from '../../components/InputText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import useDummyData from '../../store/useDummyData'
import { StatusBar } from 'expo-status-bar'

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

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className='bg-secondary border border-secondary rounded-lg py-3 px-6 mb-3'
        >
          <Text className='text-white font-bold text-center'>Ubah Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          className='bg-white border border-secondary rounded-lg py-3 px-6'
        >
          <Text className='text-secondary font-bold text-center'>Batal</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
