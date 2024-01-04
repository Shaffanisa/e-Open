import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import * as ExpoImagePicker from 'expo-image-picker'

interface IProps {
  name: string
  label?: string
  subLabel?: string
  required?: boolean
  //   placeholder?: string
  //   isSecured?: boolean
  errorMsg?: string
  //   disabled?: boolean
  className?: string
}

export default function ImagePicker({
  name,
  label,
  subLabel,
  required,
  className,
  errorMsg,
}: IProps) {
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      //   allowsEditing: true,
      //   aspect: [3, 4],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View className={`mb-4 ${className}`}>
      {label && (
        <Text
          nativeID={name}
          className={`mb-3 ${
            errorMsg ? 'text-negative' : 'text-content-primary'
          }`}
        >
          {label}
          {subLabel && <Text className='text-[#CECECE]'> ({subLabel})</Text>}
          {required && <Text className='text-negative'> *</Text>}
        </Text>
      )}

      <Pressable
        onPress={pickImage}
        className='mb-3 justify-center items-center h-28 border border-dashed border-primary  rounded-lg'
      >
        {image ? (
          <Image
            source={{ uri: image }}
            className='w-full h-full rounded-lg'
            resizeMode='cover'
          />
        ) : (
          <Text className='text-primary'>Choose File</Text>
        )}
      </Pressable>

      <Text className='text-xs text-content-tertiary'>
        File Format: JPG, PNG, JPEG
      </Text>
      <Text className='text-xs text-content-tertiary'>Max. Ukuran: 700kb</Text>
    </View>
  )
}
