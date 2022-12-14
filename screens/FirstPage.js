import { View, Text, Button, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


const FirstPage = ({ navigation, route }) => {
    const [postText, setPostText] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
                <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>



                <TextInput

                    placeholder='Please Enter your name here. . .'
                    style={{ width: 350, padding: 10, backgroundColor: 'white' }}
                    value={postText}
                    onChangeText={setPostText}
                />
                <Text style={{ padding: 10 }}>
                    <Button
                        title='Go next' onPress={() => { navigation.navigate('SecondPage', { post: postText }) }}
                    />
                </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: "gray" }}>
                    www.tni.ac.th
                </Text>
            </View>



        </SafeAreaView>


    );
}


const styles = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        padding: 20,

    },

    heading: {

        fontSize: 25,

        textAlign: 'center',

        marginVertical: 10,

    },

    textStyle: {

        textAlign: 'center',

        fontSize: 16,

        marginVertical: 10,

    },

});

export default FirstPage