import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface IProps {
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  title: string
  className?: string
}

export function ButtonPrimary(props: IProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      className={`${
        !props.disabled
          ? 'bg-secondary border-secondary'
          : 'bg-secondary/40 border-secondary/40'
      } border rounded-lg py-3 px-6 ${props.className}`}
    >
      <Text className='text-white font-bold text-center'>{props.title}</Text>
    </TouchableOpacity>
  )
}

export function ButtonSecondary(props: IProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      className={`${
        !props.disabled
          ? 'bg-white border-secondary'
          : 'bg-secondary/40 border-secondary/40'
      } border border-secondary rounded-lg py-3 px-6 mt-6`}
    >
      <Text className='text-secondary font-bold text-center'>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}
