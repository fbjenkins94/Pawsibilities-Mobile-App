import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import pawsAPI from '../API/PawsBack.js';

const SignIn = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [error, onError] = React.useState("");

    const isValidInput = () => onError(password == 123123 ? "" : "Invalid Credentials");

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <SafeAreaView>
                <View style={styles.signUpContainer}>
                    <Pressable onPress={() => { navigation.navigate('SignUpScreen') }}>
                        <Text style={{ color: '#219DFF', fontSize: 16}}>New to the app? Sign up.</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: 35, marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.line}></View>
                    <Text style={{ marginHorizontal: 8, fontSize: 18 }}>Sign In</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!error ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onEmail}
                        onSubmitEditing={() => isValidInput()}
                        value={email}
                        placeholder="Your Email"
                    />
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        style={!error ? styles.emailTextBox : styles.emailTextBox2}
                        onChangeText={onPassword}
                        onSubmitEditing={() => isValidInput()}
                        value={password}
                        placeholder="Your Password"
                    />
                    <Text style={{ color: 'red' }}></Text>
                </View>
                <View style={styles.errorNamesContainer2}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 18, color: 'red' }}>{error}</Text></View>
                </View>
            </SafeAreaView>

            <Pressable
                style={styles.nextButton}
                onPress={async () => {
                    try {
                        onError(!/.+@.+\..+/.test(email) ||
                        password.length < 8 ||
                            !/[a-z]/.test(password) ||
                            !/[A-Z]/.test(password) ||
                            !/\d/.test(password) ||
                            !/\W/.test(password) ?
                            'Invalid Credentials' : '');
                        if (!firstNameError || !lastNameError || !emailError || !passwordError) {

                            //MAKE PROFILE
                            /*const response = await pawsAPI.post('/user/signup', { email, password });
                            await AsyncStorage.setItem('token', response.data.token);*/
                            navigation.navigate('PetsScreen');
                        }
                    } catch (e) { }
                }
                }>
                <Text style={{ color: 'white', fontSize: 18, }}>SIGN IN</Text>
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

    emailContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: '100%',
    },

    signUpContainer: {
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
        height: 40,
        marginLeft: 5,
        width: '45%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },

    namesContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
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

    errorNamesContainer: {
        marginTop: 3,
        paddingLeft: 7,
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        width: '100%',
    },
    errorNamesContainer2: {
        marginTop: 3,
        paddingLeft: 7,
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        width: '100%',
    },


    errorTextBoxes: {
        marginLeft: 7,
        width: '45%',
        paddingTop: 5,
    },
});

export default SignIn;