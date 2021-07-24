import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';

export default function App() {
  return ( 
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  ) 
}

// https://www.youtube.com/watch?v=A1h8jKzFtHQ&list=PLaAoUJDWH9Wqatfwa4SEfyFevrl8QefcN&index=5

// https://github.com/ndpniraj/expo-react-native-audio-player/blob/master/app/context/AudioProvider.js