import React from "react";
import { View, StyleSheet } from "react-native";

const AudiooListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.thumbnailText}>A</View>
        <View style={styles.titleContainer}>
          <Text>Title</Text>
        </View>
      </View>
      <View style={styles.rightContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AudioContext;
