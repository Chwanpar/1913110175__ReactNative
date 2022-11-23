
import { View,Text } from 'react-native';
import React from 'react';

const users = [
    {id:1,name:"John"},
    {id:2,name:"Mary"}
];



function Users() {
  return (
    <View>
        {users.map((user,index)=>{
                return ( <Text key={user.id}>
                {index+1}.{usre.name}
                </Text>
                );
            })}
    </View>
    
  );
};

export default Users;