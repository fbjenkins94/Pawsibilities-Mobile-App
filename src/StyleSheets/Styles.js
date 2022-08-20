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

export const styles_NavMenu = StyleSheet.create({
    navBar: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 100,
        alignItems: 'flex-end',
    },
    navOption1: {
        flex: 1.5,
        alignItems: 'center',
        backgroundColor: '#66b3ff',
        borderTopWidth: 1,
        borderTopColor: '#339aff',
        shadowRadius: 4,
        shadowColor: '#339aff',
    },
    navOption2: {
        flex: 1.3,
        alignItems: 'center',
        backgroundColor: '#66b3ff',
        borderWidth: 1,
        borderColor: '#339aff',
        shadowRadius: 4,
        shadowColor: '#339aff',
        height: '100%',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        height: 117,
        justifyContent: 'center'
    },
    navText: {
        color: 'white',
        fontSize: 15,
    },
    navIcon: {
        fontSize: 25,
    },
    navIconBig: {
        fontSize: 55,
        marginBottom: 10,
    }
});

export const styles_ProfileBanner = StyleSheet.create({
    editUserImage: {
        borderRadius: 70,
        height: 140,
        width: 140,
        alignSelf: 'center',
    },

    editUserInfo: {
        width: '100%',
        height: 170,
        padding: 20,
        paddingTop: 10,
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

    pictureContainer: {
        width: '100%',
        height: '60%',
        marginBottom: 20,
    },

    userImage: {
        borderRadius: 60,
        height: 120,
        width: 120,
        alignSelf: 'center',
    },

    userInfo: {
        width: '100%',
        height: 210,
        borderBottomWidth: 1,
        borderBottomColor: '#219DFF',
        padding: 20,
        paddingTop: 10,
        backgroundColor: '#219DFF',
    },

    userInfoText: {
        fontSize: 25,
        color: 'white',
    },
});

export const styles_ProfileOptions = StyleSheet.create({
    option: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
    },

    optionsContainer: {
        alignSelf: 'center',
        borderColor: 'blue',
        marginTop: 10,
        width: '90%',
    },

    optionText: {
        color: '#219DFF',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 11,
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

    yesNoButtons: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: '#219DFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        padding: 20,
    },

    yesNoText: {
        color: 'white',
        fontSize: 20,
    },
});

export const styles_Question = StyleSheet.create({
    userInfo: {
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },

    userInfoText: {
        fontSize: 25,
        color: '#219DFF',
        textAlign: 'center',
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

export const styles_Success = StyleSheet.create({
    userInfo: {
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    userInfoText: {
        fontSize: 25,
        color: '#219DFF',
        textAlign: 'center',
    },
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
        height: 50,
        justifyContent: 'flex-end',
        flex: 1,
        paddingRight: 5,
    },

    smallContainerRight: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 50,
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

export const styles_UserProfile = StyleSheet.create({
    blankSpace: {
        paddingTop: 235
    },

    userProfileContainer: screenStyle,
});