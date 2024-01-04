import { Picker } from '@react-native-picker/picker'
import useSectionLayanan from '../../store/useSectionLayanan'
import { useSearchClicked } from '../InputSearch'
import { View } from 'react-native'

export default function SectionSelect() {
  const { sectionList, activeSection, setActiveSection } = useSectionLayanan()

  return (
    <View className='border border-border-opaque rounded'>
      <View className='absolute inset-y-0 px-3 justify-center'>
        <View className='w-2 h-2 rounded-full bg-primary' />
      </View>
      <Picker
        selectedValue={sectionList
          .findIndex((val) => val === activeSection)
          .toString()}
        onValueChange={(itemValue) => {
          setActiveSection(parseInt(itemValue))
          useSearchClicked.setState({ isSearchClicked: false })
        }}
        style={{ marginLeft: 20 }}
      >
        {sectionList.slice(0, sectionList.length - 1).map((item, i) => (
          <Picker.Item key={item} label={item} value={i.toString()} />
        ))}
      </Picker>
    </View>
  )
}
