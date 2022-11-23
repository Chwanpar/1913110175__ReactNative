import { View, Text , Button } from 'react-native'
import React from 'react'
import Users from './Users';

const Logo = () => {


    const textLogo = "React Native by Chwanpar";
    const isTH= false;

    const showData =()=>{
        alert("Hello Button");
    }


  return (
    <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
      <Text>textLogo</Text>
      {
        //isTH && <Text>ภาษาไทย</Text>
        isTH
        ?<Text>ภาษาไทย</Text>
        :<Text>ภาษาอังกฤษ</Text>
      }
      <Button title="Click me" onPress={showData} />

      <Users/>
    </View>
  )
}

export default Logo