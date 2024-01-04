import { View, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import useDummyData from '../../../store/useDummyData'
import { ButtonPrimary } from '../../../components/Button'
import InputText from '../../../components/InputText'

type FormData = {
  noKK: string
  nik: string
  namaLengkap: string
  email: string
  password: string
  kecamatan: string
  kelurahan: string
  rt: string
  rw: string
  kodePos: string
  noHp: string
}

export default function ProfilPage() {
  const router = useRouter()
  const {
    noKK,
    nik,
    namaLengkap,
    email,
    password,
    kecamatan,
    kelurahan,
    rt,
    rw,
    kodePos,
    noHp,
  } = useDummyData()

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      noKK,
      nik,
      namaLengkap,
      email,
      password,
      kecamatan,
      kelurahan,
      rt,
      rw,
      kodePos,
      noHp,
    },
  })

  return (
    <View className='pb-24'>
      <View className='mb-6'>
        <Text className='text-lg font-bold text-content-primary'>
          Data Diri
        </Text>
        <Text className='text-[10px] text-content-secondary'>
          Data diri merupakan data yang sudah terdaftar di Dukcapil dan tidak
          dapat diubah
        </Text>
      </View>

      <>
        <InputText
          disabled
          name='noKK'
          control={control}
          rules={{ required: true }}
          label='No. Kartu Keluarga'
          placeholder='Masukan No. Kartu Keluarga Anda'
          errorMsg={errors.noKK?.message}
        />
        <InputText
          disabled
          name='nik'
          control={control}
          rules={{ required: true }}
          label='NIK'
          placeholder='Masukan NIK Anda'
          errorMsg={errors.nik?.message}
        />
        <InputText
          disabled
          name='namaLengkap'
          control={control}
          rules={{ required: true }}
          label='Nama Lengkap'
          placeholder='Masukan Nama Lengkap Anda'
          errorMsg={errors.namaLengkap?.message}
        />
        <InputText
          disabled
          name='kecamatan'
          control={control}
          rules={{ required: true }}
          label='Nama Kecamatan'
          placeholder='Masukan Nama Kecamatan Anda'
          errorMsg={errors.kecamatan?.message}
        />
        <InputText
          disabled
          name='kelurahan'
          control={control}
          rules={{ required: true }}
          label='Nama Kelurahan'
          placeholder='Masukan Nama Kelurahan Anda'
          errorMsg={errors.kelurahan?.message}
        />
        <InputText
          disabled
          name='rw'
          control={control}
          rules={{ required: true }}
          label='No. RW'
          placeholder='Masukan No. RW Anda'
          errorMsg={errors.rw?.message}
        />
        <InputText
          disabled
          name='rt'
          control={control}
          rules={{ required: true }}
          label='No. RT'
          placeholder='Masukan No. RT Anda'
          errorMsg={errors.rt?.message}
        />
        <InputText
          disabled
          name='kodePos'
          control={control}
          rules={{ required: true }}
          label='Kode Pos'
          placeholder='Masukan Kode Pos Anda'
          errorMsg={errors.kodePos?.message}
        />
      </>

      <View className='bg-[#E8E8E8] h-[1px] my-6' />

      <View className='mb-6'>
        <View className='flex-row justify-between items-center'>
          <Text className='text-lg font-bold text-content-primary'>
            Data Akun
          </Text>
          <Link
            href='/ubah-data'
            className='text-xs font-medium text-secondary'
          >
            Ubah Data
          </Link>
        </View>
        <Text className='text-[10px] text-content-secondary'>
          Data akun merupakan data yang dimasukkan saat mendaftar akun pada
          aplikasi e-OPen
        </Text>
      </View>

      <View className='mb-20'>
        <InputText
          disabled
          name='email'
          control={control}
          rules={{ required: true }}
          label='Email'
          placeholder='Masukan Email Anda'
          errorMsg={errors.email?.message}
        />
        <InputText
          disabled
          isSecured
          name='password'
          control={control}
          rules={{ required: true }}
          label='Kata Sandi'
          placeholder='Masukan Kata Sandi Anda'
          errorMsg={errors.password?.message}
        />
        <InputText
          disabled
          name='noHp'
          control={control}
          rules={{ required: true }}
          label='No. HP'
          placeholder='Masukan No. HP Anda'
          errorMsg={errors.noHp?.message}
        />
      </View>

      <ButtonPrimary title='Keluar' onPress={() => router.push('/')} />
    </View>
  )
}
