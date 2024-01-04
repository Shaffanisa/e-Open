import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { View, Text, Pressable } from 'react-native'

interface IProps {
  name: string
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  label?: string
  subLabel?: string
  required?: boolean
  errorMsg?: string
  className?: string
  timePicker?: boolean
}

export default function InputDate({
  name,
  date,
  setDate,
  label,
  subLabel,
  required,
  errorMsg,
  className,
  timePicker,
}: IProps) {
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date ?? new Date(),
      onChange,
      mode: 'date',
    })
  }

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      value: date ?? new Date(),
      onChange,
      mode: 'time',
    })
  }

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

      <Pressable
        onPress={timePicker ? showTimepicker : showDatepicker}
        className='border border-[#DEDEDE] px-2 py-3 rounded-[4px] bg-white'
      >
        <Text
          className={`${
            !date ? 'text-content-tertiary' : 'text-content-primary'
          }`}
        >
          {date
            ? timePicker
              ? `${date.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hourCycle: 'h24',
                })} WIB`
              : date.toLocaleDateString('es-CL')
            : timePicker
            ? '00:00 WIB'
            : '00-00-0000'}
        </Text>
      </Pressable>
    </View>
  )
}
