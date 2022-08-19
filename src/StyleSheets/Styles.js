import { StyleSheet } from 'react-native';

const screenStyle = {
    backgroundColor: 'white',
    height: '100%',
};

export const style_Divider = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 35,
    },

    line: {
        borderBottomWidth: 1,
        borderColor: '#219DFF',
        marginBottom: 12,
        width: 100,
    },

    styleDividerText: {
        fontSize: 18,
        marginHorizontal: 8,
    },
});

export const style_Home = StyleSheet.create({
    appScreen: {
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 0,
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },

    logoBox: {
        alignItems: 'center',
        height: '75%',
        justifyContent: 'center',
        paddingTop: 10,
        width: '100%',
    },

    pawsLogo: {
        color: "#219DFF",
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 60,
    },
});

export const style_PawsButtons = StyleSheet.create({
    adoptButton: {
        alignItems: 'center',
        backgroundColor: '#3633FF',
        borderRadius: 20,
        color: 'white',
        marginBottom: 20,
        padding: 15,
        width: '75%',
    },

    adoptText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

    nextButton: {
        alignItems: 'center',
        backgroundColor: '#219DFF',
        bottom: 0,
        color: 'white',
        fontSize: 18,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },

    nextText: {
        color: 'white',
        fontSize: 18,
    },

    shelterButton: {
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
        width: '75%',
    },

    shelterText: {
        color: '#3633FF',
        fontSize: 20,
        fontWeight: "bold",
    },

    signUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 55,
        width: '100%',
    },

    signUpText: {
        color: '#219DFF',
        fontSize: 16,
    },
});

export const style_SignIn = StyleSheet.create({
    errorNamesContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        marginTop: 3,
        paddingLeft: 7,
        width: '100%',
    },

    errorTextBoxes: {
        marginLeft: 7,
        paddingTop: 5,
        width: '45%',
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'black',
    },

    namesContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    signInContainer: screenStyle,

    textBoxes: {
        borderColor: '#219DFF',
        borderRadius: 6,
        borderWidth: 1,
        height: 40,
        marginLeft: 5,
        padding: 10,
        width: '45%',
    },
});

export const style_SignUp = StyleSheet.create({
    namesContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },

    signUpContainer: screenStyle,
});

export const style_UserInput = StyleSheet.create({
    errorNamesContainer2: {
        height: 25,
        justifyContent: 'center',
        paddingLeft: 25,
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

    errorTextBoxes: {
        marginLeft: 7,
        width: '45.5%',
    },

    errorUserInputContainer: {
        borderColor: 'red',
        borderRadius: 6,
        borderWidth: 1,
        height: 45,
        marginLeft: 5,
        padding: 10,
        width: '90%',
    },

    smallContainerLeft: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-end',
        flex: 1,
        paddingRight: 5,
    },

    smallContainerRight: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 60,
        width: '50%',
        flex: 1,
        paddingLeft: 5,
    },

    textBoxes: {
        borderColor: '#219DFF',
        height: 45,
        width: '89%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
    },

    textBoxes2: {
        borderColor: 'red',
        height: 45,
        width: '89%',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
    },

    userInputContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: '100%',
    },

    inputTextBox: {
        borderColor: '#219DFF',
        borderRadius: 6,
        borderWidth: 1,
        height: 45,
        marginLeft: 5,
        padding: 10,
        width: '90%',
    },
});