import React from "react";
import { ScrollView, View } from "react-native";
import { style_SignUp as styles } from '../StyleSheets/Styles.js';
import { PawsButtons } from '../Components/PawsButtons.js';
import { Divider } from '../Components/Divider.js';
import { UserInput } from '../Components/UserInput.js';
import { UserInputError } from '../Components/UserInputError.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pawsAPI from '../API/PawsBack.js';

export const SignUp_Adoptions = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [emailError, onEmailError] = React.useState("");
    const [firstName, onFirstName] = React.useState("");
    const [firstNameError, onFirstNameError] = React.useState("");
    const [lastName, onLastName] = React.useState("");
    const [lastNameError, onLastNameError] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [passwordError, onPasswordError] = React.useState("");

    const checkCredentials = async () => {
        try {
            onFirstNameError(!firstName ? 'Enter your first name' : '');
            onLastNameError(!lastName ? 'Enter your last name' : '');
            onEmailError(!/.+@.+\..+/.test(email) ? 'Enter a valid email' : '');
            onPasswordError(password.length < 8 ? 'Password must contain at least 8 characters' :
                !/[a-z]/.test(password) ? 'Password must contain at least 1 lowercase letter' :
                    !/[A-Z]/.test(password) ? 'Password must contain at least 1 uppercase letter' :
                        !/\d/.test(password) ? 'Password must contain at least 1 number between 0-9' :
                            !/\W/.test(password) ? 'Password must contain at least 1 special character' :
                                '');
            if (!firstNameError && !lastNameError && !emailError && !passwordError) {
                //MAKE PROFILE
                const response = await pawsAPI.post('user/signup', { firstName, lastName, email, password });
                await AsyncStorage.setItem('token', response.data.token);
                navigation.navigate('PetsScreen');
            }
        } catch (e) { onPasswordError('Trouble connecting to the API. Please try again later.') }
    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <ScrollView style={{ height: '100%', backgroundColor: 'white', }}>
                <PawsButtons
                    buttonStyle={'signUpButton'}
                    textStyle={'signUpText'}
                    buttonText={'Already have an account? Sign in'}
                    clickFunction={() => navigation.navigate('SignIn')} />
                <Divider
                    dividerText={'Sign Up'} />
                <View style={styles.namesContainer}>
                    <UserInput
                        containerStyle={'smallContainerLeft'}
                        inputStyle={!firstNameError ? 'textBoxes' : 'textBoxes2'}
                        changeFunction={onFirstName}
                        inputValue={firstName}
                        inputPlaceholder={"First Name"} />
                    <UserInput
                        containerStyle={'smallContainerRight'}
                        inputStyle={!lastNameError ? 'textBoxes' : 'textBoxes2'}
                        changeFunction={onLastName}
                        inputValue={lastName}
                        inputPlaceholder={"Last Name"} />
                </View>
                <UserInputError
                    error={firstNameError}
                    errorTwo={lastNameError} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!emailError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onEmail}
                    inputValue={email}
                    inputPlaceholder={"Your Email"} />
                <UserInputError
                    error={emailError} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!passwordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onPassword}
                    inputValue={password}
                    inputPlaceholder={"Your Password"} />
                <UserInputError
                    error={passwordError} />
                <View style={{ height: 78 }}></View>
            </ScrollView>
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'SIGN UP'}
                clickFunction={checkCredentials} />
        </View>
    );
};

export const SignUp_Shelters = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [emailError, onEmailError] = React.useState("");
    const [shelterName, onShelterName] = React.useState("");
    const [shelterNameError, onShelterNameError] = React.useState("");
    const [address, onAddress] = React.useState("");
    const [addressError, onAddressError] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [passwordError, onPasswordError] = React.useState("");

    const checkCredentials = async () => {
        try {
            onShelterNameError(!shelterName ? 'Enter the name of your shelter' : '');
            onEmailError(!/.+@.+\..+/.test(email) ? 'Enter a valid email' : '');
            onAddressError(!address ? 'Enter the address of your shelter' : '');
            onPasswordError(password.length < 8 ? 'Password must contain at least 8 characters' :
                !/[a-z]/.test(password) ? 'Password must contain at least 1 lowercase letter' :
                    !/[A-Z]/.test(password) ? 'Password must contain at least 1 uppercase letter' :
                        !/\d/.test(password) ? 'Password must contain at least 1 number between 0-9' :
                            !/\W/.test(password) ? 'Password must contain at least 1 special character' :
                                '');
            if (!shelterNameError && !addressError && !emailError && !passwordError) {
                //MAKE PROFILE
                const response = await pawsAPI.post('shelter/signup', { shelterName, address, email, password });
                await AsyncStorage.setItem('token', response.data.token);
                navigation.navigate('ShelterPets');
            }
        } catch (e) { onPasswordError('Trouble connecting to the API. Please try again later.') }
    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <ScrollView style={{ height: '100%', backgroundColor: 'white', }}>
                <PawsButtons
                    buttonStyle={'signUpButton'}
                    textStyle={'signUpText'}
                    buttonText={'Already have an account? Sign in'}
                    clickFunction={() => navigation.navigate('SignIn')} />
                <Divider
                    dividerText={'Sign Up'} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!shelterNameError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onShelterName}
                    inputValue={shelterName}
                    inputPlaceholder={"Shelter Name"} />
                <UserInputError
                    error={shelterNameError} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!addressError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onAddress}
                    inputValue={address}
                    inputPlaceholder={"Shelter Address"} />
                <UserInputError
                    error={addressError} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!emailError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onEmail}
                    inputValue={email}
                    inputPlaceholder={"Shelter Email"} />
                <UserInputError
                    error={emailError} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!passwordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onPassword}
                    inputValue={password}
                    inputPlaceholder={"Your Password"} />
                <UserInputError
                    error={passwordError} />
                <View style={{ height: 78 }}></View>
            </ScrollView>
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'SIGN UP'}
                clickFunction={checkCredentials} />
        </View>
    );
};