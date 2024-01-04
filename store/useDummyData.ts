import { create } from 'zustand'

interface IState {
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
  provinsi: string
  kota: string
  noHp: string
  nikAnak: string
  noKKSKPWNI: string
  namaKepalaKeluarga: string
  alamat: string
  dataKelahiran: {
    nik: string
    namaLengkap: string
    jenisKelamin: string
    tempatDilahirkan: string
    tempatLahir: string
    tanggalLahir: string
    jamLahir: string
    jenisKelahiran: string
    kelahiranKe: string
    penolongKelahiran: string
    beratBayi: string
    panjangBayi: string
    noKK: string
    namaKepalaKeluarga: string
    kecamatan: string
    kelurahan: string
  }
  dataKematian: {
    nik: string
    namaLengkap: string
    jenisKelamin: string
    agama: string
    tempatLahir: string
    tanggalLahir: string
    jamLahir: string
    anakKe: string
    tempatKematian: string
    namaRumahSakit: string
    kotaRumahSakit: string
    alamatRumahSakit: string
    sebabKematian: string
    yangMenerangkan: string
    noKK: string
    namaKepalaKeluarga: string
    kecamatan: string
    kelurahan: string
    alamat: string
    rt: string
    rw: string
  }
  dataIbu: {
    noKK: string
    namaLengkap: string
    tanggalLahir: string
    pekerjaan: string
    tanggalPerkawinan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataAyah: {
    noKK: string
    namaLengkap: string
    tanggalLahir: string
    pekerjaan: string
    tanggalPerkawinan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataPelapor: {
    noKK: string
    namaLengkap: string
    umur: string
    pekerjaan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataSaksi11: {
    noKK: string
    namaLengkap: string
    umur: string
    pekerjaan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataSaksi12: {
    noKK: string
    namaLengkap: string
    umur: string
    pekerjaan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataSaksi21: {
    noKK: string
    namaLengkap: string
    umur: string
    pekerjaan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataSaksi22: {
    noKK: string
    namaLengkap: string
    umur: string
    pekerjaan: string
    alamat: string
    rt: string
    rw: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
  }
  dataTambahJiwa: {
    namaLengkap: string
    tempatLahir: string
    tanggalLahir: string
    jenisKelamin: string
    golonganDarah: string
    agama: string
    statusKawin: string
    pendidikan: string
    pekerjaan: string
    hubunganKeluarga: string
  }
  dataSKPWNI: {
    alamatBaru: string
    provinsi: string
    kota: string
    kecamatan: string
    kelurahan: string
    alasanPindah: string
    klasifikasiPindah: string
    jenisPindah: string
    statusKK: string
    jumlahAnggotaKeluarga: string
  }
}

const useDummyData = create<IState>()((set) => ({
  noKK: '3270891293812931',
  nik: '327981291892189',
  namaLengkap: 'Natalia Jessica',
  email: 'nataliajessica@gmail.com',
  password: 'natalia12345678',
  kecamatan: 'Bekasi Barat',
  kelurahan: 'Kranji',
  rt: '005',
  rw: '005',
  kodePos: '17145',
  provinsi: 'Jawa Barat',
  kota: 'Kota Bekasi',
  noHp: '0899999999',
  nikAnak: '3270891293812931',
  noKKSKPWNI: '3123871289605912',
  namaKepalaKeluarga: 'Marcel Widianto',
  alamat: 'Jl. Patriot no 129',
  dataKelahiran: {
    nik: '3270891293812931',
    namaLengkap: 'Stephanie Wijaya',
    jenisKelamin: 'perempuan',
    tempatDilahirkan: 'rs/rb',
    tempatLahir: 'Rs Hermina Galaxy',
    tanggalLahir: '30-11-2023',
    jamLahir: '05:00',
    jenisKelahiran: 'tunggal',
    kelahiranKe: '1',
    penolongKelahiran: 'dokter',
    beratBayi: '5',
    panjangBayi: '10',
    noKK: '312387128378',
    namaKepalaKeluarga: 'Marcel Widianto',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Kranji',
  },
  dataKematian: {
    nik: '3270891293812931',
    namaLengkap: 'Stephanie Wijaya',
    jenisKelamin: 'perempuan',
    agama: 'islam',
    tempatLahir: 'Bekasi',
    tanggalLahir: '30-11-2023',
    jamLahir: '05:00',
    anakKe: '1',
    tempatKematian: 'Rumah Sakit',
    namaRumahSakit: 'Rs Hermina Galaxy',
    kotaRumahSakit: 'Bekasi',
    alamatRumahSakit: 'Jl. Pulo Sirih Utama Blok BA1 No.11, RT.003',
    sebabKematian: 'sakit/tua',
    yangMenerangkan: 'dokter',
    noKK: '3270891293812931',
    namaKepalaKeluarga: 'Marcel Widianto',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Kranji',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
  },
  dataIbu: {
    noKK: '3270891293812931',
    namaLengkap: 'Natalia Jessica',
    tanggalLahir: '30-11-1998',
    pekerjaan: 'Ibu Rumah Tangga',
    tanggalPerkawinan: '20-10-2020',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Kranji',
  },
  dataAyah: {
    noKK: '3270891293812931',
    namaLengkap: 'Marcel Widianto',
    tanggalLahir: '10-07-1996',
    pekerjaan: 'Wiraswasta',
    tanggalPerkawinan: '20-10-2020',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Kranji',
  },
  dataPelapor: {
    noKK: '3270891293812931',
    namaLengkap: 'Jonathan Sanjaya',
    umur: '28',
    pekerjaan: 'Wiraswasta',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Kranji',
  },
  dataSaksi11: {
    noKK: '3270891293812931',
    namaLengkap: 'Umi Rahmayati',
    umur: '28',
    pekerjaan: 'Dokter Kandungan',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Bintara',
  },
  dataSaksi12: {
    noKK: '3270891293812931',
    namaLengkap: 'Grace Maharani',
    umur: '27',
    pekerjaan: 'Perawat',
    alamat: 'Jl. Patriot no 129',
    rt: '005',
    rw: '003',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Jakasampurna',
  },
  dataSaksi21: {
    noKK: '3270891293812931',
    namaLengkap: 'Hari Gunawan',
    umur: '28',
    pekerjaan: 'Dokter',
    alamat: 'Jl. Patriot no 129',
    rt: '011',
    rw: '001',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Bintara',
  },
  dataSaksi22: {
    noKK: '3270891293812931',
    namaLengkap: 'Grace Maharani',
    umur: '27',
    pekerjaan: 'Perawat',
    alamat: 'Jl. Patriot no 129',
    rt: '006',
    rw: '015',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Jakasampurna',
  },
  dataTambahJiwa: {
    namaLengkap: 'Stephanie Wijaya',
    tempatLahir: 'Bekasi',
    tanggalLahir: '30-11-2020',
    jenisKelamin: 'Perempuan',
    golonganDarah: 'AB',
    agama: 'Islam',
    statusKawin: 'Belum Kawin',
    pendidikan: 'Belum Sekolah',
    pekerjaan: 'Belum/Tidak Berkerja',
    hubunganKeluarga: 'anak',
  },
  dataSKPWNI: {
    alamatBaru: 'Jl. Raden Saleh no.21',
    provinsi: 'Jawa Barat',
    kota: 'Kota Bekasi',
    kecamatan: 'Bekasi Barat',
    kelurahan: 'Bintara',
    alasanPindah: 'pekerjaan',
    klasifikasiPindah: 'satu-kelurahan',
    jenisPindah: 'kepala-keluarga',
    statusKK: 'kk-baru',
    jumlahAnggotaKeluarga: '1',
  },
}))

export default useDummyData
