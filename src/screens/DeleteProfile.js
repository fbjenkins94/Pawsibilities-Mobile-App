import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable, Image } from "react-native";

const DeleteProfile = ({ navigation }) => {
    const [passwordOne, onPasswordOne] = React.useState("");
    const [passwordTwo, onPasswordTwo] = React.useState("");
    const [passwordError, onPasswordError] = React.useState("");


    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <SafeAreaView>
                <View style={styles.userInfo}>
                    <Text style={{ fontSize: 20, color: '#219DFF', textAlign: 'center' }}>If you want to delete your profile, then enter your password twice below</Text>
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!passwordError ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onPasswordOne}
                        value={passwordOne}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!passwordError ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onPasswordTwo}
                        value={passwordTwo}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{passwordError}</Text></View>
                </View>
            </SafeAreaView>

            <Pressable
                style={styles.nextButton}
                onPress={async () => {
                    onPasswordError(passwordOne !== passwordTwo ?
                        'Something went wrong. Please enter your password again.' :
                        '');
                    try {
                        if (!passwordError) { } navigation.navigate('Question');
                    } catch (e) { }
                }}>
                <Text style={{ color: 'white', fontSize: 18, }}>DELETE PROFILE</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        width: 100,
        borderBottomWidth: 1,
        borderColor: '#219DFF',
        marginBottom: 7,
    },

    errorEmailContainer: {
        marginTop: 3,
        paddingLeft: 7,
        alignItems: 'center',
        flexDirection: 'row',
        height: 10,
        justifyContent: 'center',
        width: '100%',
    },

    signInContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 55,
    },

    emailTextBox: {
        borderColor: '#219DFF',
        height: 45,
        marginLeft: 5,
        width: '92%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    emailTextBox2: {
        borderColor: 'red',
        height: 45,
        marginLeft: 5,
        width: '92%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    textBoxes: {
        borderColor: '#219DFF',
        height: 45,
        marginLeft: 5,
        width: '45%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    errorTextBoxes: {
        marginLeft: 7,
        width: '90%',
    },

    textBoxes2: {
        borderColor: 'red',
        height: 45,
        marginLeft: 5,
        width: '45%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    namesContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    directions: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        width: '100%',
    },

    emailContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: '100%',
    },

    errorNamesContainer: {
        marginTop: 3,
        paddingLeft: 7,
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        width: '100%',
    },

    grayText: {
        color: 'gray'
    },

    nextButton: {
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#219DFF',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        fontSize: 18,
    },

    emailText: {
        alignSelf: 'center',
        paddingTop: 0,
        color: 'white',
        fontSize: 16,
    },

    namesContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    option: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },

    optionsContainer: {
        width: '90%',
        borderColor: 'blue',
        alignSelf: 'center',
        marginTop: 10,
    },

    pictureContainer: {
        width: '100%',
        height: '60%',
        marginBottom: 20,
    },

    userInfo: {
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    userImage: {
        borderRadius: 70,
        height: 140,
        width: 140,
        alignSelf: 'center',
    },

    userInfoText: {
        fontSize: 25,
        color: 'white',
    },
});

export default DeleteProfile;