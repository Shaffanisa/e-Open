import React from 'react'
import { View, Text } from 'react-native'
import InputText from './InputText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'

interface IProps {
  name: string
  title?: string
  label?: string
  placeholder: string
  defaultValues: any
}

export default function InputSearch(props: IProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: props.defaultValues,
  })

  const onSubmit = (values: any) => {
    console.log({ values })
  }

  return (
    <>
      {props.title && (
        <Text className='text-lg font-bold mb-4'>{props.title}</Text>
      )}
      <View className='mb-6 flex-row items-end'>
        <View className='flex-1'>
          <InputText
            label={props.label}
            name={props.name}
            control={control}
            rules={{ required: true }}
            placeholder={props.placeholder}
            errorMsg={errors.root?.message}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className='bg-secondary h-14 rounded-lg justify-center ml-1 mb-4 px-6'
        >
          <Text className='text-white font-bold'>Cari</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
