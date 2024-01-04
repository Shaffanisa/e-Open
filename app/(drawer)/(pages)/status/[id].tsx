import { useLocalSearchParams } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { iconAssets } from '../../../../data'

const layananDummy = [
  {
    id: '3123871282781',
    name: 'Permohonan Rekam KTP-EL',
    date: '1 Desember 2023',
    status: 'Menunggu Verifikasi',
    icon: 'statusWaitIcon',
  },
  {
    id: '3123871282782',
    name: 'Permohonan Rekam KTP-EL',
    date: '1 Desember 2023',
    status: 'DiTolak',
    icon: 'statusCancelIcon',
  },
]

const timeline = [
  { title: 'Daftar Permohonan Rekam KTP-EL', date: '1 Desember 2023' },
  {
    title: 'Verifikasi Berkas Permohonan Rekam KTP-EL',
    date: '2 Desember 2023',
  },
  {
    title: 'Jadwal Rekam KTP-EL',
    subtitle:
      'Pemohon datang ke kecamatan untuk foto, rekam sidik jari dan TTD.',
    date: '2 Desember 2023',
  },
]

export default function DetailLayanan() {
  const { id } = useLocalSearchParams()
  const item = layananDummy.find((v) => v.id === id)!

  return (
    <View>
      <View
        className='px-6 py-4 bg-white mb-6'
        style={{
          elevation: 2,
          shadowColor: '#3F4753',
        }}
      >
        <View className='flex-row items-center mb-3'>
          <Image
            source={iconAssets[item.icon]}
            resizeMode='contain'
            className='w-5 h-5'
          />
          <Text className='ml-3 text-xs font-bold text-content-primary'>
            {item.name}
          </Text>
        </View>
        <View className='px-1'>
          {[
            { key: 'No. Pendaftaran', value: '12345 - 12345 - 12345' },
            { key: 'Tanggal Pendaftaran', value: item.date },
            { key: 'Jenis Layanan', value: 'Rekam KTP-EL' },
            { key: 'Lokasi Perekaman', value: 'Kecamatan Bekasi Barat' },
            { key: 'No. Urut Perekaman', value: '3' },
            { key: 'NIK Pemohon', value: '3123871282781' },
            { key: 'Status', value: item.status },
            {
              key: 'Keterangan',
              value: 'Jika tidak datang dalam 1x24 jam, maka dianggap batal',
            },
          ].map((a) => (
            <View key={a.key} className='flex-row mb-1'>
              <Text className='text-[10px] basis-1/2 text-content-secondary'>
                {a.key}
              </Text>

              <Text className='text-[10px] mr-3'>:</Text>
              <Text className='text-[10px] font-semibold basis-1/2 text-content-secondary'>
                {a.value}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View>
        <Text className='text-lg font-bold mb-4'>Timeline Pengajuan</Text>
        <View
          className='absolute inset-y-0 border-[0.5px] border-secondary ml-3 mt-[50px] h-1/2'
          style={{ borderStyle: 'dashed' }}
        />
        {timeline.map((a, i) => (
          <View key={a.title} className='pb-4 flex-row'>
            <View className='mr-4'>
              <View
                className={`ml-1 mt-1 w-4 h-4 rounded-full ${
                  i === timeline.length - 1 ? 'bg-[#D9D9D9]' : 'bg-primary'
                }`}
              />
            </View>
            <View className='flex-1 pr-3'>
              <Text
                className={`text-xs font-semibold mb-2 ${
                  i === timeline.length - 1
                    ? 'text-content-secondary'
                    : 'text-content-primary'
                }`}
              >
                {a.title}
              </Text>
              {a.subtitle && (
                <Text
                  className={`text-[10px] font-semibold mb-2 ${
                    i === timeline.length - 1
                      ? 'text-content-secondary'
                      : 'text-content-primary'
                  }`}
                >
                  {a.subtitle}
                </Text>
              )}
              <Text className='text-[10px] text-content-secondary'>
                {a.date}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
