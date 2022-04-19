import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";

const UselessTextInput = () => {
    const [password, onPassword] = React.useState("");
    const [error, onError] = React.useState("");

    const isValidInput = () => onError(password == 123123 ? "" : "Incorrect Password");

    return (
        <View style={{ height: '100%' }}>
            <View style={styles.passcodeContainer}>
                <Text style={{ fontSize: 12 }}>Enter the 6-digit password sent to your number</Text>
                <TextInput
                    style={styles.textBoxes}
                    onChangeText={(p) => p.length < 7 ? onPassword(p.replace(/[^0-9]/g, '')) : ''}
                    onSubmitEditing={() => isValidInput()}
                    placeholder="6-digit password"
                    value={password}
                />
                <Text style={{ color: 'red' }}>{error}</Text>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    textBoxes: {
        borderColor: '#219DFF',
        height: 40,
        marginTop: 10,
        marginBottom: 6,
        width: '90%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    passcodeContainer: {
        height: 60,
        //justifyContent: 'center',
        width: '100%',
        marginTop: 150,
        marginLeft: 12,
    },
});

export default UselessTextInput;