import { View, Text ,TextInput,Button} from 'react-native'
import React from 'react'

const TxtInput = () => {
  return (
    <View style={{padding:50}}>
      <View
      Style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}
      >
        <TextInput
        placeholder='Course Goal'
        Style={{
            width:'80%',
            borderColor:'black',
            borderWidth:1,
            padding:10
        }}></TextInput>

        <Button title='Add'></Button>
      </View>
    </View>
  )
}

export default TxtInput;