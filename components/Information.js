import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const information = () => {
  return (
    <View style={styles.container}>
    <Text style = {styles.textStyle }>React Native with Thai-Nichi</Text>
    <Text style={{color:"blue",fontSize:15}}>By Chwanpar  Kodchavong</Text>
    <Text style={[styles.textStyle,styles.warning]}>
      Student ID 1913110175
      </Text>
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

    textStyle:{
       color:"red",
       fontSize:20,
        fontWeight:"bold"
    },
    warning:{
      fontWeight:"bold",
      color:"red",
    }
  });