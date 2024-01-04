import { Control, Controller } from 'react-hook-form'
import { View, Text, Pressable } from 'react-native'

interface IProps {
  name: string
  control: Control<any, any>
  label?: string
  errorMsg?: string
  disabled?: boolean
  className?: string
  optionList: { name: string; value: string }[]
  basisTwo?: boolean
  flexCol?: boolean
  customHandler?: (value: string) => void
}

export default function InputRadio({
  label,
  name,
  control,
  errorMsg,
  disabled,
  className,
  optionList,
  basisTwo,
  flexCol,
  customHandler,
}: IProps) {
  return (
    <View className={`mb-6 ${className}`}>
      {label && (
        <Text
          nativeID={name}
          className={`mb-1 ${
            errorMsg ? 'text-negative' : 'text-content-primary'
          }`}
        >
          {label}
          <Text className='text-negative'> *</Text>
        </Text>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        disabled={disabled}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className={`${!flexCol && 'flex-row'} flex-wrap`}>
            {optionList.map((item, i) => (
              <Pressable
                key={item.name}
                className={`flex-row items-center ${
                  basisTwo ? 'basis-1/2' : 'basis-1/3'
                } ${flexCol ? 'py-1' : 'mt-3'}`}
                onPress={() => {
                  onChange(item.value)
                  customHandler && customHandler(item.value)
                }}
                onBlur={onBlur}
              >
                <View
                  className={`w-6 h-6 mr-2 rounded-full justify-center items-center ${
                    value === item.value
                      ? 'border-2 border-primary'
                      : 'border border-background-tertiary'
                  }`}
                >
                  <View
                    className={`bg-primary w-3 h-3 rounded-full ${
                      value === item.value ? 'block' : 'hidden'
                    }`}
                  ></View>
                </View>
                <Text className='text-[#3F3F3F] text-xs'>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        )}
      />
      {errorMsg && (
        <Text className='text-negative text-xs mt-1'>{errorMsg}</Text>
      )}
    </View>
  )
}
