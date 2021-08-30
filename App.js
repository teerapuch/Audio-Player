import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AudioProvider from "./app/context/AudioProvider";
import AudioListItem from "./app/components/AudioListItem";

export default function App() {
  // return (
  //   <AudioProvider>
  //     <NavigationContainer>
  //       <AppNavigator />
  //     </NavigationContainer>
  //   </AudioProvider>
  // )
  return (
    <View style={{ marginTop: 50}}>
      <AudioListItem />
    </View>
  );
}

// https://www.youtube.com/watch?v=A1h8jKzFtHQ&list=PLaAoUJDWH9Wqatfwa4SEfyFevrl8QefcN&index=5

// https://github.com/ndpniraj/expo-react-native-audio-player/blob/master/app/context/AudioProvider.js
