import { StyleSheet, Text, SafeAreaView, View,TextInput ,Button } from 'react-native'
import React, { useState } from 'react'

const UserNamePassword = () => {
    const [userName, TextInputName] = useState("");
    const [userEmail, TextInputEmail] = useState("");

    const checkTextInput = () => {
        if (!userName.trim()) {
            alert("Please Enter Name");
            return;
        }
        else if (!userEmail.trim()) {
            alert("Please Enter Email");
            return;
        }
        else{
            alert("Success");
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <TextInput
                    value={userName}
                    onChangeText={(userName) => { TextInputName(userName) }}
                    placeholder={'Enter Name'}
                    style={styles.textInputStyle}
                />

                <TextInput
                    value={userEmail}
                    onChangeText={(userEmail) => { TextInputEmail(userEmail) }}
                    placeholder={'Enter Email'}
                    style={styles.textInputStyle}
                />
                
                <View style={{ marginTop:10 }}>

                <Button  title='SUBMIT'
                onPress={checkTextInput}
                />
                </View>
            
            </View>
        </SafeAreaView>
    )
}

export default UserNamePassword



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },

    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },

});