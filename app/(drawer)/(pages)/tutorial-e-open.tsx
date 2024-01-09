import { View, Text } from 'react-native'
import WebView from 'react-native-webview'

const tutorialList = [
  {
    title: 'Tutorial Permohonan Akta Kelahiran',
    uri: 'https://www.youtube.com/embed/5D21kdgcq5o?si=kSkeWx9B6abuud52&amp',
  },
  {
    title: 'Tutorial Permohonan Kartu Keluarga',
    uri: 'https://www.youtube.com/embed/_vUhHWE5xs0?si=luKzqHQkB3S-8Dln',
  },
  {
    title: 'Tutorial Permohonan KTP EL',
    uri: 'https://www.youtube.com/embed/W_ZgpYmEtiA?si=AIUX2MiEvCrfWU6w',
  },
  {
    title: 'Tutorial Permohonan SKPWNI',
    uri: 'https://www.youtube.com/embed/amEdRaUndn8?si=Z2FOluZvNJoUjUi2',
  },
  {
    title: 'Tutorial Permohonan KIA',
    uri: 'https://www.youtube.com/embed/ddxStHofrGU?si=zatpk1a94YJ6JgIo',
  },
]

export default function TutorialPage() {
  return (
    <View className='pb-24'>
      <Text className='text-lg font-bold mb-12'>
        Silahkan menonton Video Tutorial alur pengajuan layanan
      </Text>

      {tutorialList.map(({ title, uri }) => (
        <View key={title}>
          <Text className='text-lg font-bold mb-6'>{title}</Text>
          <WebView className='h-44' source={{ uri }} />
          <View className='h-[1px] bg-[#E8E8E8] my-6' />
        </View>
      ))}
    </View>
  )
}
