import { View, Text ,Button ,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'

const Count = ({num,title}) => {

    // const{num,title} = props
    const[count,setCount] = useState(num);

/*useEffect(() =>{
    console.log('use effect 1');
});*/

/*useEffect(() =>{
    console.log('use effect 2');
},[count]);
useEffect(() =>{
    console.log('use effect 3');
});*/


  return (
    <View>
      <Text>{title} : {count}</Text>
        <Button
        title="Click Me 1"
        onPress={()=>setCount(count + 1)}
        />
    </View>
  )
}


export default Count

const style = StyleSheet.create({
    
})