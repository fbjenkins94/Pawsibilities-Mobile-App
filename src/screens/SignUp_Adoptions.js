import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import pawsAPI from '../API/PawsBack.js';

const SignUp_Adoptions = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [emailError, onEmailError] = React.useState("");
    const [firstName, onFirstName] = React.useState("");
    const [firstNameError, onFirstNameError] = React.useState("");
    const [lastName, onLastName] = React.useState("");
    const [lastNameError, onLastNameError] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [passwordError, onPasswordError] = React.useState("");

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <ScrollView>
            <SafeAreaView>
                <View style={styles.signInContainer}>
                    <Pressable onPress={() => { navigation.navigate('SignIn') }}>
                        <Text style={{ color: '#219DFF', fontSize: 16 }}>Already have an account? Sign in.</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: 35, marginBottom: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.line}></View>
                        <Text style={{ marginHorizontal: 8, fontSize: 18 }}>Sign Up</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.namesContainer}>
                    <TextInput
                        style={!firstNameError ? styles.textBoxes : styles.textBoxes2}
                        onChangeText={onFirstName}
                        placeholder="First Name"
                        vale={firstName}
                    />
                    <TextInput
                        style={!lastNameError ? styles.textBoxes : styles.textBoxes2}
                        onChangeText={onLastName}
                        value={lastName}
                        placeholder="Last Name"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{firstNameError}</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{lastNameError}</Text></View>
                </View>

                <View style={styles.emailContainer}>
                    <TextInput
                        style={!emailError ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onEmail}
                        value={email}
                        placeholder="Your Email"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{ emailError }</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!passwordError ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onPassword}
                        value={password}
                        placeholder="Your Password"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{passwordError}</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                </View>
            </SafeAreaView>
                <View style={{ height: 78 }}></View>
            </ScrollView>

            <Pressable
                style={styles.nextButton}
                onPress={async () => {
                    try {
                        onFirstNameError(!firstName ? 'Enter your first name' : '');
                        onLastNameError(!lastName ? 'Enter your last name' : '');
                        onEmailError(!/.+@.+\..+/.test(email) ? 'Enter a valid email' : '');
                        onPasswordError(password.length < 8 ||
                            !/[a-z]/.test(password) ||
                            !/[A-Z]/.test(password) ||
                            !/\d/.test(password) ||
                            !/\W/.test(password) ?
                            'Must contain at least 8 characters and one uppercase, one lowercase, one number, and one special character' :
                            '');
                        if (!firstNameError && !lastNameError && !emailError && !passwordError) {
                            //MAKE PROFILE
                            const response = await pawsAPI.post('user/signup', { firstName, lastName, email, password });
                            await AsyncStorage.setItem('token', response.data.token);
                            console.log(response.data.token);
                            navigation.navigate('PetsScreen');
                       }
                    } catch (e) {console.log(e.message)}
                }
            }>
                <Text style={{ color: 'white', fontSize: 18, }}>SIGN UP</Text>
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
        width: '45%',
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
});

export default SignUpScreen;