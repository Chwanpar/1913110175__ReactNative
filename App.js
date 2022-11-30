import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomComponent from './components/CustomComponent';
import Information from './components/Information';
import TxtInput from './components/TxtInput';
import Logo from './components/Logo';
import MyCustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import Txtinput1 from './components/Txtinput1';
import UserNamePassword from './components/UserNamePassword';
 

const App = () => {
  return (
    <View   >
     {/* <Information /> */}
     {/*<TxtInput/> */}
     {/*<CustomComponent/>}
     {/*<Logo/>*/}
     {/*<MyCustomTextWith/>*/}
     {/* <Count num={2} title="Click"/> */}
     {/*<Txtinput1></Txtinput1>*/}
     <UserNamePassword></UserNamePassword>
    </View>
  );
};




export default App;

// const style=StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
// })