import { View, Text, TouchableOpacity } from 'react-native'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import NlwSpacetimeLogo from '../src/assets/nlw-spacetime-logo.svg'
import { api } from '../src/lib/api'

export default function App() {
  const router = useRouter()
  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/<github_client_id>',
  }

  const [, response, signWithGithub] = useAuthRequest(
    {
      clientId: '<github_client_id>',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'Spacetime',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', { code })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
  }

  useEffect(() => {
    /* caso de algum problema de autenticação, provavelmente é o IP de callback cadastrado no oAuthApp do Github que não está condizente com o IP da máquina rede (ipconfig ipv4) */

    /* console.log(
      makeRedirectUri({
        scheme: 'Spacetime',
      }),
    ) 
    console.log(response) */

    if (response?.type === 'success') {
      const { code } = response.params

      handleGithubOAuthCode(code)
    }
  }, [response])

  return (
    <View className="flex-1 items-center justify-center px-10 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <NlwSpacetimeLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => signWithGithub()}
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="text-small font-alt uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-small text-center font-body leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  )
}
