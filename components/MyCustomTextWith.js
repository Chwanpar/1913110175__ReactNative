import { View, Text } from 'react-native'
import React from 'react'


const Custom =(props)=>{
    const {Fname,Lname} = props;
    return(
      <View style ={{alignItems:"center"}}>
        <Text style ={{color:'blue',fontSize:20}}>Your First name is : {Fname} and Last name is : {Lname} </Text>
      </View>
    )
  }

const MyCustomTextWith = () => {
  return (
    <View>
      <Custom Fname='Chwanpar' 
      Lname='Kodchavong'  
      />
       <Custom Fname='Gunyanut' 
      Lname='Techaphalangrak'  
      />

    </View>
  )
}

export default MyCustomTextWith