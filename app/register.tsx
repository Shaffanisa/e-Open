import { View, Text, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import HeaderAccentOne from '../components/HeaderAccentOne'
import { Entypo, Feather } from '@expo/vector-icons'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  const router = useRouter()

  return (
    <ScrollView className='flex-1' contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar style='dark' />
      <HeaderAccentOne />

      <View className='pt-10'>
        <View className='flex-row items-center mb-6'>
          <Pressable onPress={() => router.back()} className='p-4'>
            <Entypo name='chevron-small-left' size={24} color='#202020' />
          </Pressable>
          <Text className='font-bold'>Daftar</Text>
        </View>

        <View className='px-4'>
          <View className='mb-4 border border-primary bg-[#FFF9E2] rounded-lg pl-4 py-2 flex-row'>
            <Feather name='alert-circle' size={24} color='black' />
            <View className='pl-3 flex-1'>
              <Text className='font-bold text-xs text-content-primary mb-1'>
                HIMBAUAN!
              </Text>
              <Text className='text-content-secondary text-xs'>
                Pastikan email yang anda masukkan aktif agar dapat menerima
                informasi pendaftaran, ketidaksesuaian email dapat menghambat
                penyampaian informasi pendaftaran.
              </Text>
            </View>
          </View>

          <RegisterForm />
        </View>
      </View>

      {/* FOOTER ACCENT */}
      <View className='absolute h-10 bottom-0 w-screen'>
        <View
          className={`absolute bg-primary opacity-20 w-1/2 aspect-square rounded-full top-0 right-0`}
        />
        <View
          className={`absolute bg-primary opacity-20 w-1/2 aspect-square rounded-full -top-1/4 -right-1/4`}
        />
      </View>
    </ScrollView>
  )
}
