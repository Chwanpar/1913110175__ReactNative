import { View, Text, Button } from 'react-native'
import React from 'react'

const HomePost = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Create post' onPress={() => navigation.navigate('CreatPost')} />
            <Text style={{ margin: 10 }}>Post :</Text>
        </View>
    )
}

export default HomePost