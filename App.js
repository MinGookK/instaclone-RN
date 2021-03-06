import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { NavigationContainer } from '@react-navigation/native'
import LoggedOutNav from './navigator/LoggedOutNav'
import { ApolloProvider } from '@apollo/client'
import client from './apollo'

export default function App() {
  const [loading, setLoading] = useState(true)
  const onFinish = () => setLoading(false)
  const preload = () => {
    const fontsToLoad = [Ionicons.font]
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font))
    const imagesToLoad = [
      require('./assets/logo.jpeg'),
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

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </ApolloProvider>
  )
}
