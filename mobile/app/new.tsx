import { View, Text, Switch, TextInput, ScrollView } from 'react-native'
import NlwSpacetimeLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

  const [isPublic, setIsPublic] = useState(false)

  return (
    <ScrollView
      className="flex-1 px-10"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NlwSpacetimeLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            thumbColor={isPublic ? '#9B79EA' : '#9E9EA0'}
            trackColor={{ false: '#767577', true: '#372560' }}
            value={isPublic}
            onValueChange={setIsPublic}
          />
          <Text className="font-body text-base text-gray-200">
            Tornar memória pública
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-large border-gray h-32 items-center justify-center border border-dashed border-gray-500 bg-black/20"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF" />
            <Text className="text-small font-body text-gray-200">
              Adicionar foto ou vídeo de capa
            </Text>
          </View>
        </TouchableOpacity>

        <TextInput
          multiline
          className="text-lord p-0 font-body text-gray-50"
          placeholderTextColor="#56565A"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        ></TextInput>

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="text-small font-alt uppercase text-black">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
