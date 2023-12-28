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
  noHp: string
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
  noHp: '0899999999',
}))

export default useDummyData
