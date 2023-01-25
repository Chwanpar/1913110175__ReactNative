
import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

// function HomeScreen(){
//     return(

//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//           <Ionicons name='home' size={40} color='#3E8383'/>
//                 <Text>Home</Text>
        
//         <Button title="Go to Setting" onPress={() => navigation.navigate("Setting")}/>
//         </View>
//     );
// }

// function SettingScreen(navigation){
//     return(
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//                 <Text>Setting</Text>
//                 <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
//         </View>
//     );
// }
const Tab = createBottomTabNavigator();
function MyTabs(){
    return(
        <Tab.Navigator
        screenOptions={(route)=>({
            tabBarIcon:(focused,color,size)=>{
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused
                    ?'ios-information-circle':'ios-information-circle-outline'

                }else if(route.name === "Setting"){
                    iconName = focused
                    ?'ios-list-box':'ios-list'
                }
                //you can return any component taha here
                return <Ionicons name={iconName} size={size} color={color}/>

            },
            tabBarActiveTintColor:'red',
            tabBarInactiveBackgroundColor:'red'

        })}

        >
           <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screeen name="Setting" component={SettingScreen}></Tab.Screeen>
        </Tab.Navigator>
    );
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      
      
      {/* <DrawerItem 
      label="First page Option"
      onPress={()=>props.navigation.navigation("First Stack")}
      />
      <DrawerItem 
      label="Second page Option"
      onPress={()=>props.navigation.navigation("Second Stack")}
      /> */}

    </DrawerContentScrollView>
  );
}


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Stack2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SecondPage" component={SettingScreen}></Stack.Screen>

    </Stack.Navigator>
  );
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    screenOptions={{
      drawerStyle:{
        drawerActiveBackgroundColor: "pink",
        width:240
      }
    }}
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent{...props}/>}> 
 
      {/* <Drawer.Screen name="Feed" component={Feed}/>
      <Drawer.Screen name="Article" component={Article}/> */}
      <Drawer.Screen
        name="First Stack"
        component={MyTabs}
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="Second Stack"
        component={Stack2}
        options={{
          drawerLabel: "Setting",
          title: "Setting",
        }}
        ></Drawer.Screen>
       


    </Drawer.Navigator>
  )
}

const App = () => { 
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}



export default App;