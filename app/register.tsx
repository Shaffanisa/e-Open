import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

export default function RegisterPage() {
  const router = useRouter()

  return (
    <ScrollView className='flex-1' contentContainerStyle={{ flexGrow: 1 }}>
      <View className='flex-1 items-center justify-center'>
        <Text className='mb-3'>Register</Text>
        <Button
          title='back to login'
          onPress={() => router.push('/')}
          color='#202020'
        />
      </View>
    </ScrollView>
  )
}
