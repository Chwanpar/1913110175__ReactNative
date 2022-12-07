import { StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Alert } from 'react-native'
import React from 'react'

const AlertExample = () => {

    const simplieAlertHandler = () => {
        alert('Hello I am Alert');

    };

    const twoOpitionAlertHandler = () => {
        //alert('Hello I am AlertHandler');
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two opion alert.Do you want to cancel me?',
            [
                {
                    text:'yes',onPress: ()=>alert('Yes Pressed')
            
                },
                {
                    text:'no',onPress: ()=>alert('No Pressed')
            
                }
            ],
            //click outside of Alert will not cancel
            {cancelable:false}
        )

    };

    


  return (
   <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
     <Button
     title='Simple Alert'
     onPress={simplieAlertHandler}
     />

<Button
     title='Alert with Two Options'
     onPress={twoOpitionAlertHandler}
     />
    </View>
   </SafeAreaView>
  )
}

export default AlertExample

const styles = StyleSheet.create({
     container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
     },
    });