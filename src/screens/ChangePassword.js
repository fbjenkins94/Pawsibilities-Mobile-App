import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";

export const ChangePassword = ({ navigation }) => {
    const [currentPassword, onCurrentPassword] = React.useState("");
    const [newPassword, onNewPassword] = React.useState("");
    const [newPasswordError, onNewPasswordError] = React.useState("");


    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <SafeAreaView>
                <View style={styles.userInfo}>
                    <Text style={{ fontSize: 20, color: '#219DFF', textAlign: 'center'}}>Enter your current password and new password below</Text>
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}>Current Password</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}></Text></View>
                </View>
                <View style={styles.namesContainer}>
                    <View style={styles.emailContainer}>
                        <TextInput
                            style={!newPasswordError ? styles.emailTextBox : styles.emailTextBox2}
                            onChangeText={onCurrentPassword}
                            value={currentPassword}
                            placeholder="Current Password"
                        />
                    </View>
                </View>


                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}>New Password</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!newPasswordError ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onNewPassword}
                        value={newPassword}
                        placeholder="New Password"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{newPasswordError}</Text></View>
                </View>
            </SafeAreaView>

            <Pressable
                style={styles.nextButton}
                onPress={async () => {
                    onNewPasswordError(newPassword.length < 8 ||
                        !/[a-z]/.test(newPassword) ||
                        !/[A-Z]/.test(newPassword) ||
                        !/\d/.test(newPassword) ||
                        !/\W/.test(newPassword) ?
                        'Something went wrong. Please enter your passwords again.' :
                        '');
                    try {
                        console.log('newPasswordError : ' + newPasswordError);
                        if (!newPasswordError) { } navigation.navigate('Success', { PropText: 'You have successfully changed your password! 🎉'});
                    } catch (e) { }
                }}>
                <Text style={{ color: 'white', fontSize: 18, }}>CHANGE PASSWORD</Text>
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