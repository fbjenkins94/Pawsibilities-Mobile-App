import { StyleSheet } from 'react-native';

const style_HomeScreen = StyleSheet.create({
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

const style_HomeScreen_Button = StyleSheet.create({
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
});

const style_SignIn = StyleSheet.create({
    emailContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: '100%',
    },

    emailTextBox: {
        borderColor: '#219DFF',
        borderRadius: 6,
        borderWidth: 1,
        height: 45,
        marginLeft: 5,
        padding: 10,
        width: '92%',
    },

    emailTextBox2: {
        borderColor: 'red',
        borderRadius: 6,
        borderWidth: 1,
        height: 45,
        marginLeft: 5,
        padding: 10,
        width: '92%',
    },

    errorNamesContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        marginTop: 3,
        paddingLeft: 7,
        width: '100%',
    },

    errorNamesContainer2: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        marginTop: 3,
        paddingLeft: 7,
        width: '100%',
    },

    errorTextBoxes: {
        marginLeft: 7,
        paddingTop: 5,
        width: '45%',
    },

    line: {
        borderBottomWidth: 1,
        borderColor: '#219DFF',
        marginBottom: 7,
        width: 100,
    },

    namesContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        width: '100%',
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

    signUpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 55,
        width: '100%',
    },

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