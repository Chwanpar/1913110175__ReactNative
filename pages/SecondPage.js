import { View, Text ,SafeAreaView,Button} from 'react-native'
import React from 'react'
import styles from '../components/styles'

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the Second Page</Text>
    
       
            <Button
                title='Go to first page' onPress={() => { navigation.navigate('FirstPage') }}
            />
             <Button
                title='Go to Third page' onPress={() => { navigation.navigate('ThirdPage') }}
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

export default SecondPage