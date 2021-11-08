import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import LoggedOutNav from './navigator/LoggedOutNav'
import { NavigationContainer } from '@react-navigation/native'
import { Appearance, AppearanceProvider } from 'react-native-appearance'

export default function App() {
  const [loading, setLoading] = useState(true)
  const onFinish = () => setLoading(false)
  const preload = () => {
    const fontsToLoad = [Ionicons.font]
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font))
    const imagesToLoad = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png',
    ]
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image))
    return Promise.all([...fontPromises, ...imagePromises])
  }
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    )
  }
  console.log('왜안나와?')
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </AppearanceProvider>
  )
}
