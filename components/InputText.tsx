import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface IProps {
  id: string
  label: string
  placeholder: string
  isSecured?: boolean
  value: string
  onChange: ((text: string) => void) | undefined
  errorMessage?: string
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

export default function InputText(props: IProps) {
  const [hidePass, setHidePass] = useState(true)

  return (
    <>
      <Text
        nativeID={props.id}
        className={`mb-1 ${props.errorMessage && 'text-negative'}`}
      >
        {props.label}
      </Text>
      <View className='relative'>
        <TextInput
          onTouchStart={() => props.setErrorMessage('')}
          secureTextEntry={props.isSecured && hidePass}
          accessibilityLabel='input'
          accessibilityLabelledBy={props.id}
          className={`border ${
            props.errorMessage
              ? 'border-negative'
              : 'border-background-tertiary'
          } bg-background-primary rounded py-3 px-2`}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onChangeText={props.onChange}
        />
        {props.isSecured && (
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

      {props.errorMessage && (
        <Text className='text-negative text-xs mt-1'>{props.errorMessage}</Text>
      )}
    </>
  )
}
