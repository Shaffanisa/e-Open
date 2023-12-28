import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { usePathname, useRouter } from 'expo-router'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import useDrawer from '../store/useDrawer'
import { sideMenuList } from '../data'

export default function SideMenu(props: any) {
  const path = usePathname()
  const { closeDrawer } = useDrawer()
  const push = useRouter().push

  React.useEffect(() => {
    useDrawer.setState({ ...props })
  }, [])

  return (
    <DrawerContentScrollView className='w-screen ' {...props}>
      <View className='py-5'>
        <View className='px-4 flex flex-row justify-between items-center mb-9'>
          <Image source={require('../assets/images/logo-small.png')} />
          <Pressable onPress={closeDrawer}>
            <AntDesign name='close' size={16} color='black' />
          </Pressable>
        </View>

        <View>
          {sideMenuList.map((item: any) => (
            <Pressable
              key={item.name}
              onPress={() => {
                closeDrawer()
                push(item.href)
              }}
              className={`flex-row items-center mb-2 py-3 px-8 ${
                path === item.href && 'bg-[#FFF9E2]'
              }`}
            >
              <View className='mr-2'>
                {item.iconType === 'antDesign' ? (
                  <AntDesign
                    name={item.icon}
                    size={16}
                    color={path === item.href ? 'black' : '#202020'}
                  />
                ) : (
                  <Feather
                    name={item.icon}
                    size={16}
                    color={path === item.href ? 'black' : '#202020'}
                  />
                )}
              </View>
              <Text
                className={`text-xs ${
                  path === item.href
                    ? 'font-bold text-black'
                    : 'text-content-primary'
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
