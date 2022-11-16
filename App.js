import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomComponent from './assets/components/CustomComponent';
import Information from './assets/components/Information';
import TxtInput from './assets/components/TxtInput';
const App = () => {
  return (
    <View >
     {/* <Information /> */}
     {/*<TxtInput/> */}
     <CustomComponent></CustomComponent>
    </View>
  );
};

export default App