import React from 'react'
import { View, Text } from 'react-native'
import InputText from './InputText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { create } from 'zustand'
import { ButtonPrimary } from './Button'

export const useSearchClicked = create<{
  isSearchClicked: boolean
  toggleSearchBtn: () => void
}>()((set, get) => ({
  isSearchClicked: false,
  toggleSearchBtn: () => set({ isSearchClicked: !get().isSearchClicked }),
}))

interface IProps {
  name: string
  title?: string
  label?: string
  placeholder: string
  defaultValues: any
  customOnPress?: () => void
}

export default function InputSearch(props: IProps) {
  const { toggleSearchBtn } = useSearchClicked()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: props.defaultValues,
  })

  const values = getValues()
  const isDisabled = values[props.name] === ''

  const onSubmit = () => {
    toggleSearchBtn()
  }

  return (
    <>
      {props.title && (
        <Text className='text-lg font-bold mb-4'>{props.title}</Text>
      )}
      <View className='mb-4 flex-row items-end'>
        <View className='flex-1'>
          <InputText
            required
            label={props.label}
            name={props.name}
            control={control}
            rules={{ required: true }}
            placeholder={props.placeholder}
            errorMsg={errors.root?.message}
          />
        </View>
        <TouchableOpacity
          disabled={isDisabled}
          onPress={props.customOnPress ?? handleSubmit(onSubmit)}
          className={`bg-secondary h-14 rounded-lg justify-center ml-1 mb-4 px-6 ${
            isDisabled && 'bg-secondary/40'
          }`}
        >
          <Text className='text-white font-bold'>Cari</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
