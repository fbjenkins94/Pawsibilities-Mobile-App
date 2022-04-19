import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable, Image } from "react-native";
import pawsAPI from '../API/PawsBack.js';

const EditProfile = ({ navigation }) => {
    const [email, onEmail] = React.useState("forestbreeze94@gmail.com");
    const [emailError, onEmailError] = React.useState("");
    const [firstName, onFirstName] = React.useState("Forest");
    const [firstNameError, onFirstNameError] = React.useState("");
    const [lastName, onLastName] = React.useState("Jenkins");
    const [lastNameError, onLastNameError] = React.useState("");

    return (
        <View style={{ height: '100%', backgroundColor: 'white', }}>
            <SafeAreaView>
                <View style={styles.userInfo}>
                    <View style={styles.pictureContainer}>
                        <Image
                            style={styles.userImage}
                            source={{
                                uri: 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}>First Name</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}>Last Name</Text></View>
                </View>
                <View style={styles.namesContainer}>
                    <TextInput
                        style={!firstNameError ? styles.textBoxes : styles.textBoxes2}
                        onChangeText={onFirstName}
                        value={firstName}
                        placeholder={firstNameError ? 'Enter First Name' : ''}
                        placeholderTextColor='red'
                    />
                    <TextInput
                        style={!lastNameError ? styles.textBoxes : styles.textBoxes2}
                        onChangeText={onLastName}
                        value={lastName}
                        placeholder={lastNameError ? 'Enter Last Name' : ''}
                        placeholderTextColor='red'
                    />
                </View>

                
                <View style={styles.errorNamesContainer}>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 14, color: 'lightgray' }}>Email</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
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
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}>{emailError}</Text></View>
                    <View style={styles.errorTextBoxes}><Text style={{ fontSize: 12, color: 'red' }}></Text></View>
                </View>
            </SafeAreaView>

            <Pressable
                style={styles.nextButton}
                onPress={async () => {
                    try {
                        onFirstNameError(!firstName ? 'Enter your first name' : '');
                        onLastNameError(!lastName ? 'Enter your last name' : '');
                        onEmailError(!/.+@.+\..+/.test(email) ? 'Enter a valid email' : '');
                        if (!firstNameError && !lastNameError && !emailError) navigation.navigate('UserProfile');
                    } catch (e) { }
                }
                }>
                <Text style={{ color: 'white', fontSize: 18, }}>FINISH EDITS</Text>
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
        padding: 20,
        paddingTop: 10,
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

export default EditProfile;