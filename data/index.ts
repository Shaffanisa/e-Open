export const iconAssets: {
  [key: string]: any
} = {
  aktaIcon: require('../assets/images/akta-icon.png'),
  kkIcon: require('../assets/images/kk-icon.png'),
  rekamKTPIcon: require('../assets/images/rekam-ktp-icon.png'),
  ktpIcon: require('../assets/images/ktp-icon.png'),
  skpwniIcon: require('../assets/images/skpwni-icon.png'),
  kiaIcon: require('../assets/images/kia-icon.png'),
  pdfIcon: require('../assets/images/pdf-icon.png'),
  yellowFileIcon: require('../assets/images/yellow-file-icon.png'),
}

export const listLayanan = [
  {
    icon: 'aktaIcon',
    name: 'Akta Kelahiran',
    link: '/layanan/akta-kelahiran',
    syarat: [
      'Formulir F-2.01',
      'Surat Keterangan Lahir dari doket/bidan/penolong atau SPTJM kebenaran data kelahiran (ASLI)',
      'Foto Buku/Akta Nikah (ASLI)',
      'Foto KTP (ASLI)',
      'Foto Kartu Keluarga (ASLI)',
      'Foto Ijazah untuk akta kelahiran dewasa (ASLI)',
    ],
  },
  {
    icon: 'aktaIcon',
    name: 'Akta Kematian',
    link: '/layanan/akta-kematian',
    syarat: [
      'Formulir F-2.01',
      'Fotocopy KTP dan Akta Kelahiran Pelapor',
      'Fotocopy KK',
      'Fotocopy Akta Kelahiran atau Ijazah (Almarhum)',
      'Keterangan Kematian dari Kelurahan (ASLI)',
      'Keterangan Kematian dari Rumah Sakit (ASLI)',
      'Fotocopy Buku/Akta Nikah',
      'Fotocopy KTP-EL Saksi',
    ],
  },
  {
    icon: 'kkIcon',
    name: 'Kartu Keluarga',
    link: '/layanan/kartu-keluarga',
    syarat: [
      {
        name: 'Penerbitan Kartu Keluarga karena penambahan anggota keluarga:',
        list: [
          'Formulir F-1.02',
          'KK lama',
          'Bukti peristiwa kependudukan / peristiwa penting lainnya',
          'Surat pernyataan bersedia menerima sebagai anggota keluarga dari kepala keluarga KK yang di tumpangi',
          'Surat nikah untuk yang statusnya menikah, jika tidak ada maka status perkawinan didaları KK menjadi kawin tidak tercatat',
          'Untuk perbaikan nama/tempat tanggal lahir lampirkan Akta Kelahirannya',
        ],
      },
      {
        name: 'Penerbitan Kartu Keluarga karena pengurangan anggota keluarga:',
        list: [
          'Formulir F-1.02',
          'KK lama',
          'Bukti peristiwa kependudukan / peristiwa penting lainnya seperti jika ingin pengurangan karena pindah, bisa dilampirkan bukti pindahnya berupa surat pindah',
          'Surat nikah untuk yang statusnya menikah, jika tidak ada maka status perkawinan didalam KK menjadi kawin tidak tercatat',
          'Untuk perbaikan nama/tempat tanggal lahir lampirkan Akta Kelahirannya',
        ],
      },
      {
        name: 'Penerbitan Kartu Keluarga karena hilang/rusak:',
        list: [
          'Formulir F-1.02',
          'Surat keterangan kehilangan dari Kepolisian atau KK yang rusak KTP-EL',
          'Surat nikah untuk yang statusnya menikah, Jika tidak ada maka status perkawinan didalam KK menjadi kawin tidak tercatat',
          'Untuk perbaikan nama/tempat tanggal lahir lampirkan',
        ],
      },
    ],
  },
  {
    icon: 'rekamKTPIcon',
    name: 'Rekam KTP-EL',
    link: '/layanan/rekam-ktp-el',
    syarat: ['Formulir F-1.03', 'Fotocopy Akta Kelahiran ', 'Fotocopy KK'],
  },
  {
    icon: 'ktpIcon',
    name: 'Cetak KTP-EL',
    link: '/layanan/cetak-ktp-el',
    syarat: [
      {
        name: 'Layanan Perubahan Elemen Data',
        list: [
          'Melakukan validasi data terlebih dahulu pada titik layanan kecamatan sesuai domisili dokumen administrasi kependudukan',
          'Melampirkan KTP dan KK',
        ],
      },
      {
        name: 'Layanan Hilang/Rusak',
        list: [
          'Melampirkan KK',
          'Bagi KTP-EL yang hilang wajib melampirkan surat keterangan hilang dari polsek/polres',
          'Bagi KTP-EL yang hilang wajib melampirkan fisik KTP-EL dan menukarkan pada saat pengambilan pengganti KTP-EL',
        ],
      },
    ],
  },
  {
    icon: 'skpwniIcon',
    name: 'SKPWNI',
    link: '/layanan/skpwni',
    syarat: [
      'Formulir F-1.03',
      'KK dari daerah asal',
      'KTP keluarga yang pindah',
      'Bukti peristiwa kependudukan / peristiwa penting lainnya',
    ],
  },
  {
    icon: 'kiaIcon',
    name: 'Cetak KIA',
    link: '/layanan/cetak-kia',
    syarat: [
      'Formulir F-1.02',
      'Fotocopy KK',
      'Fotocopy KTP Orang Tua',
      'Fotocopy Buku/Akta Nikah Orang Tua',
      'Fotocopy Akta Kelahirani',
      'Pas foto berwarna ukuran 2x3 sebanyak 2 lembar diperuntukan bagi anak usia 5 tahun keatas',
    ],
  },
]

export const loginOtherServices = [
  { title: 'Permisi', desc: 'Permohonan menjadi warga kota bekasi' },
  {
    title: 'Halo Pamor',
    desc: 'Layanan yang disediakan untuk laporan warga yang tidak bisa mendaftar',
  },
  {
    title: 'Anduk Bang Bek',
    desc: 'Pelayanan Kependudukan yang Berkebutuhan Khusus',
  },
  {
    title: 'Duduk Mesra',
    desc: 'Layanan pengaduan disdukcapil untuk masyarakat',
  },
  { title: 'Moto KTP', desc: 'Permohonan ganti foto E-KTP' },
  { title: 'Sip Ora', desc: 'Pelayanan Orang Asing' },
  {
    title: 'Konsolidasi Data',
    desc: 'Data belum terupdate pada lembaga layanan lain?',
  },
  {
    title: 'Jebol Dukcapil',
    desc: 'Butuh jemput bola layanan administrasi kependudukan?',
  },
  { title: 'Petak Ludo', desc: 'Warga luar jabodetabek kehilangan E-KTP?' },
  { title: 'Pamor Sapa Warga', desc: 'Menu Khusus Petugas' },
  { title: 'Silampid', desc: 'Menu Pencatatan Khusus pengurus RW' },
]

export const sideMenuList = [
  {
    iconType: 'antDesign',
    icon: 'home',
    name: 'Beranda',
    href: '/beranda',
  },
  {
    iconType: 'feather',
    icon: 'check-circle',
    name: 'Status',
    href: '/status',
  },
  {
    iconType: 'antDesign',
    icon: 'download',
    name: 'Unduh Formulir',
    href: '/unduh-formulir',
  },
  {
    iconType: 'feather',
    icon: 'alert-circle',
    name: 'Bantuan',
    href: '/bantuan',
  },
  {
    iconType: 'feather',
    icon: 'video',
    name: 'Tutorial E-Open',
    href: '/tutorial-e-open',
  },
  {
    iconType: 'feather',
    icon: 'user',
    name: 'Profil',
    href: '/profil',
  },
]
