import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'
import React from 'react'
import  styles  from '../components/styles'

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the Third Page</Text>
    
        
            <Button
                title='Go to First page' onPress={() => { navigation.navigate('FirstPage') }}
            />
             <Button
                title='Go to Second page' onPress={() => { navigation.navigate('SecondPage') }}
            />
        
    </View>
    <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: "gray" }}>
        Thai-Nichi Institute of Technology
        </Text>
    </View>



</SafeAreaView>
  )
}

export default ThirdPage

