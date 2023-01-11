import { View, Text,Button } from 'react-native';
import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";



function First({navigation}){
  return
    <FirstPage/>
  ;
}
function Second({navigation}){
  return
    <SecondPage/>
  ;
}
function Third({navigation}){
  return
    <ThirdPage/>
  ;
}


function HomeScreen()
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button title='Go to Notification'/>

    </View>

  );
}

function Stack1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Stack2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage}></Stack.Screen>
      <Stack.Screen name="ThirdPage" component={ThirdPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Feed({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style ={{fontSize:20}}>This is the First Page under</Text>
        <Text style ={{fontSize:20}}>First Page Option</Text>
        <Button title='Open Drawer' onPress={()=>navigation.openDrawer()}/>
        <Button title='Toggle Drawer' onPress={()=>navigation.toggleDrawer()}/>
    </View>
  );
}

function Article(){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Article Screen</Text>
    </View>
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

function MyDrawer(){
  return(
    <Drawer.Navigator
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#b0e0e6',
        width:240
      }
    }}
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent{...props}/>}> 
 
      {/* <Drawer.Screen name="Feed" component={Feed}/>
      <Drawer.Screen name="Article" component={Article}/> */}
      <Drawer.Screen
        name="First Stack"
        component={Stack1}
        options={{
          drawerLabel: "First page Option",
          title: "First Stack",
        }}
      />
      <Drawer.Screen
        name="Second Stack"
        component={Stack2}
        options={{
          drawerLabel: "Second page Option",
          title: "Second Stack",
        }}
        ></Drawer.Screen>
       


    </Drawer.Navigator>
  )
}

const App = () => {
  return (
   <NavigationContainer>
    {/* <Drawer.Navigator
    useLegacyImplementation
    >
      <Drawer.Screen  name='Home' component={HomeScreen}/>
    </Drawer.Navigator> */}
    <MyDrawer></MyDrawer>
   </NavigationContainer>
  );
};

export default App;