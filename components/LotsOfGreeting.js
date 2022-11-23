
import React from 'react'
import { View, Text  } from 'react-native'

const Greeting = (props) => {
    //const {name} = props;
    return(
    <View style={{alignItems:"center"}}>
        <Text style={{color:'red',fontSize:20}}>Hello : {name}</Text>
    </View>
    );

};


const LotsOfGreeting = () => {
  return (
   <View style={{flex:1,justifyContent:'center',top:50}}>
   <Greeting name="Marry Christmas"/>
   <Greeting name="NewYear"/>
   <Greeting name="Songkran"/></View>
  )
}

export default LotsOfGreeting