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
  numPad?: boolean
  unit?: string
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
  numPad,
  unit,
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
            <View
              className={`px-2 py-3 border bg-background-primary rounded ${
                errorMsg ? 'border-negative' : 'border-background-tertiary'
              } ${disabled && 'bg-[#FFF9E2]'}`}
            >
              <TextInput
                id={name}
                editable={!disabled}
                placeholder={placeholder}
                accessibilityLabelledBy={name}
                keyboardType={numPad ? 'decimal-pad' : 'default'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isSecured && hidePass}
              />
            </View>

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
            {unit && (
              <View className='absolute right-0 bg-background-tertiary inset-y-0 w-12 rounded-r justify-center items-center'>
                <Text className='text-content-tertiary'>{unit}</Text>
              </View>
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
