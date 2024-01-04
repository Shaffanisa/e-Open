import { create } from 'zustand'

interface SectionState {
  sectionList: string[]
  activeSection?: string
  setActiveSection: (sectionIndex?: number) => void
}

const useSectionLayanan = create<SectionState>()((set, get) => ({
  sectionList: [''],
  setActiveSection: (sectionIndex) => {
    set({ activeSection: get().sectionList[sectionIndex ?? 0] })
  },
}))

export default useSectionLayanan
