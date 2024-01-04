import { useRouter } from 'expo-router'
import { Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function LayananBerhasilPage() {
  const router = useRouter()

  return (
    <SafeAreaView className='bg-white flex-1 px-4 justify-center'>
      <StatusBar style='dark' />

      <Text className='text-base font-bold text-center mb-5'>
        Permohonan Berhasil Didaftar
      </Text>
      <Image
        source={require('../../assets/images/permohonan-success-fig.png')}
        className='w-full mb-5 px-8'
        resizeMode='contain'
      />

      <Text className='text-content-tertiary text-base mb-12 text-center'>
        Mohon bersabar ya, berkas anda akan segera kami verifikasi. Kami sudah
        mengirimkan datail pendaftaran pada email
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/beranda')}
        className='bg-secondary border border-secondary rounded-lg py-3 px-6 mb-3'
      >
        <Text className='text-white font-bold text-center'>
          Kembali Ke Beranda
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
