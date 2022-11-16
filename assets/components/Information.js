import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const information = () => {
  return (
    <View style={styles.container}>
    <Text>React</Text>
    <Text>By Chwanpar  Kodchavong</Text>
    <Text>Student ID 1913110175</Text>
    <Text>Major Information </Text>
  </View>
  )
}

export default information;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffff",
      alignItems: "center",
      justifyContent: "center",
    },
  });