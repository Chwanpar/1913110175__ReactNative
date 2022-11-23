import { View, Text, View } from 'react-native';
import React from 'react';
import styles from './styles'


const welcome = () => {
    return (
      <View style={styles.container} >
     <Text style={styles.title}>Welome to React Native</Text>
     <Text style={styles.warning}>with Mobile Appliation</Text>
      </View>
    );
  };
  
  export default welcome