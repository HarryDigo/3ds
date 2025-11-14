import { useState } from 'react'
import { Alert, Keyboard, Pressable, TextInput, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { useAppContext } from '@hooks'
import { searchAndSetLocation } from '@services'

export const FilterInput = () => {
  const { mapRef, setMarker } = useAppContext()
  const [search, setSearch] = useState('')

  const validate = (search) => {
    if (!process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY) {
      Alert.alert('Erro', 'Chave da API do Google Maps não está definida.')
      return false
    }
    if (!search || search.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um endereço válido.')
      return false
    }
    Keyboard.dismiss()
    return true
  }

  const handleSubmit = () => {
    if (validate(search)) {
      searchAndSetLocation(search, mapRef, setMarker)
    }
  }

  return (
    <View className='flex-row z-10 mt-auto mb-10 mx-20 bg-white'>
      <TextInput
        className='flex-1 px-4'
        placeholder='Pesquisar local'
        inputMode='search'
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSubmit}
      />
      <Pressable className='px-2 bg-[#e1e5e9]' onPress={handleSubmit}>
        <Ionicons name='search' size={28} className='my-auto' />
      </Pressable>
    </View>
  )
}