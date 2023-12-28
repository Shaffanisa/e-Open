import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'

interface IProps {
  name: string
  control: Control<any, any>
  label?: string
  subLabel?: string
  required?: boolean
  placeholder?: string
  isSecured?: boolean
  errorMsg?: string
  disabled?: boolean
  className?: string
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >
}

export default function InputText({
  name,
  label,
  subLabel,
  required,
  control,
  rules,
  placeholder,
  disabled,
  errorMsg,
  isSecured,
  className,
}: IProps) {
  const [hidePass, setHidePass] = useState(true)

  return (
    <View className={`mb-4 ${className}`}>
      {label && (
        <Text
          nativeID={name}
          className={`mb-1 ${
            errorMsg ? 'text-negative' : 'text-content-primary'
          }`}
        >
          {label}
          {subLabel && <Text className='text-[#CECECE]'> ({subLabel})</Text>}
          {required && <Text className='text-negative'> *</Text>}
        </Text>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        disabled={disabled}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className='relative'>
            <TextInput
              placeholder={placeholder}
              accessibilityLabelledBy={name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={isSecured && hidePass}
              className={`border bg-background-primary rounded py-3 px-2 disabled:bg-red-500 ${
                errorMsg ? 'border-negative' : 'border-background-tertiary'
              }`}
            />
            {isSecured && (
              <Pressable
                onPress={() => setHidePass(!hidePass)}
                className='absolute right-0 px-3 inset-y-0 justify-center'
              >
                {hidePass ? (
                  <Ionicons name='eye-off-outline' size={24} color='#202020' />
                ) : (
                  <Ionicons name='eye-outline' size={24} color='#202020' />
                )}
              </Pressable>
            )}
          </View>
        )}
      />
      {errorMsg && (
        <Text className='text-negative text-xs mt-1'>{errorMsg}</Text>
      )}
    </View>
  )
}
