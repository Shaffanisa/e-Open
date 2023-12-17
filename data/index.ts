export const listLayanan = [
  { icon: 'aktaIcon', name: 'Akta Kelahiran', link: '/home' },
  { icon: 'aktaIcon', name: 'Akta Kematian', link: '/home' },
  { icon: 'kkIcon', name: 'Kartu Keluarga', link: '/home' },
  { icon: 'rekamKTPIcon', name: 'Rekam KTP-EL', link: '/home' },
  { icon: 'ktpIcon', name: 'Cetak KTP-EL', link: '/home' },
  { icon: 'skpwniIcon', name: 'SKPWNI', link: '/home' },
  { icon: 'kiaIcon', name: 'Cetak KIA', link: '/home' },
]

export const iconAssets: {
  [key: string]: any
} = {
  aktaIcon: require('../assets/images/akta-icon.png'),
  kkIcon: require('../assets/images/kk-icon.png'),
  rekamKTPIcon: require('../assets/images/rekam-ktp-icon.png'),
  ktpIcon: require('../assets/images/ktp-icon.png'),
  skpwniIcon: require('../assets/images/skpwni-icon.png'),
  kiaIcon: require('../assets/images/kia-icon.png'),
}

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
