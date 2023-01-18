import { View, Text } from 'react-native'
import React from 'react'

const SettingScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ margin: 20, fontSize: 30,  }}>
          Setting Screen
        </Text>
        <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  };
  

export default SettingScreen