import React from "react";
import { SafeAreaView, TextInput, View, Text, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import pawsAPI from '../API/PawsBack.js';
import { Divider } from '../Components/Divider.js';
import { style_SignIn as styles } from '../StyleSheets/Styles.js';

/*
 * 1) turn first button into a HomeScreen_Button component
 * 2) Turn -Sign in- divider into an imported component
 * 3) Turn text inputs into imported components
 * 4) (Optional) turn error boxes into an imported componenet
 * 5) Turn submit button into an imported componenet
 */

const SignIn_Adoptions = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [error, onError] = React.useState("");

    const isValidInput = () => onError(password == 123123 ? "" : "Invalid Credentials");

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <SafeAreaView>

                <PawsButtons
                    buttonStyle={'signUpButton'}
                    textStyle={'signUpText'}
                    buttonText={'New to the app? Sign up'}
                    clickFunction={() => navigation.navigate('SignUp_Adoptions')}} />

                <Divider
                    dividerText={ 'Sign In' }/>

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
                        if (!error) {
                            console.log("HERE");
                            //MAKE PROFILE
                            const response = await pawsAPI.post('user/signin', { email, password });
                            await AsyncStorage.setItem('token', response.data.token);
                            navigation.navigate('PetsScreen');
                        }
                    } catch (e) { console.log(e.message) }
                }
            }>
                <Text style={{ color: 'white', fontSize: 18, }}>SIGN IN</Text>
            </Pressable>
        </View>
    );
};

export default SignIn_Adoptions;