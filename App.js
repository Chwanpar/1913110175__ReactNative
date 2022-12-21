import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HomePost from './screens/HomePost';
import CreatePost from './screens/CreatePost';
// import FirstPage from './screens/FirstPage';
// import SecondPage from './screens/SecondPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
 import ThirdPage from './pages/ThirdPage';

// function HomeScreen({navigation}){
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       {/* <Text>
//         Home Screen
//       </Text>
//       <Button title="เกี่ยวกับเรา"
//       onPress={()=>navigation.navigate('About')}/> */}
//       <FirstPage/>

//     </View>
//   );
// }

// function AboutScreen(){
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Text>
//         About Screen
//       </Text>
//     </View>

//   )
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreatePost'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#800000'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen}/>
     <Stack.Screen name="About" component={AboutScreen}/> */}
        {/* <Stack.Screen name="Homepost" component={HomePost} />
        <Stack.Screen name="CreatPost" component={CreatePost} /> */}
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App