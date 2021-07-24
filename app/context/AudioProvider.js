import React, { Component, createContext } from 'react';
import { Text, View, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()
export class AudioProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      audioFiles: [],
    }
  }

  permissionAlert = () => {
    Alert.alert("Permission Required", "This app needs to read audio files!", [{
      text: 'I am ready',
      onPress: () => this.permissionAlert()
    },{
      text: 'cancle',
      onPress: () => this.permissionAlert()
    }])
  }

  getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio'
    });
    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: media.totalCount,
    });

    this.setState({ ...this.state, audioFiles: media.assets });
  }

  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    // if granted is true
    if (permission.granted) {
      // we want to get all the audio files
      this.getAudioFiles();
    }

    // if granted is false and canAskAgain is true 
    // ให้ทำการขอสิทธิ์เข้าถึง
    if (!permission.granted && permission.canAskAgain) {
      const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
      if(status === 'denied' && canAskAgain) {
        // we are going to display alert that user must allow this permission to work this app
        this.permissionAlert()
      }
      
      if(status === 'granted') {
        // we want to get all the audio files
        this.getAudioFiles();
      }

      if(status === 'denied' && !canAskAgain) {
        // we want to display some error to the user
      }
      
    }
  }

  // ก่อนแสดงผล
  componentDidMount() {
    this.getPermission()
  }

  // การแสดงผล
  render() {
    return (
    <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
      {this.props.children}
    </AudioContext.Provider>
    )
}
}

export default AudioProvider;