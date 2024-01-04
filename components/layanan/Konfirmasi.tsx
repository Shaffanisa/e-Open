import { useRouter } from 'expo-router'
import { Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import useSectionLayanan from '../../store/useSectionLayanan'

export default function Konfirmasi() {
  const router = useRouter()
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()
  const activeSectionIdx = sectionList.findIndex((val) => val === activeSection)

  return (
    <SafeAreaView className='flex-1 px-4 justify-center'>
      <Text className='text-base font-bold text-center mb-5'>
        Selesaikan Permohonan
      </Text>
      <Image
        source={require('../../assets/images/permohonan-confirm-fig.png')}
        className='w-full mb-5 px-8'
        resizeMode='contain'
      />

      <Text className='text-content-tertiary text-base mb-12 text-center'>
        Pastikan sebelum anda menyelesaikan pendaftaran, data yang telah anda
        isi sudah benar
      </Text>

      <TouchableOpacity
        onPress={() => {
          router.push('/layanan/berhasil')
          setActiveSection(0)
        }}
        className='bg-secondary border border-secondary rounded-lg py-3 px-6 mb-3'
      >
        <Text className='text-white font-bold text-center'>
          Daftar Permohonan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveSection(activeSectionIdx - 1)}
        className='bg-white border border-secondary rounded-lg py-3 px-6'
      >
        <Text className='text-secondary font-bold text-center'>
          Periksa Kembali
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
