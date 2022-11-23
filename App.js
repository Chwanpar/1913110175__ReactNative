import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomComponent from './components/CustomComponent';
import Information from './components/Information';
import TxtInput from './components/TxtInput';
import Logo from './components/Logo';
import MyCustomTextWith from './components/MyCustomTextWith';
 

const App = () => {
  return (
    <View >
     {/* <Information /> */}
     {/*<TxtInput/> */}
     {/*<CustomComponent/>}
    {/*<Logo/>*/}
     <MyCustomTextWith/>
    </View>
  );
};

export default App