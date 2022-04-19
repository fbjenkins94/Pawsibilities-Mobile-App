import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';

const UserProfile = ({ navigation }) => {
    DATA = [
        { Text: 'Edit Profile', Screen: 'EditProfile' },
        { Text: 'Change Password', Screen: 'ChangePassword' },
        { Text: 'Donate', Screen: 'Success', PropText: { PropText: 'This page is currently under construction. Check back later!' } },
        { Text: 'Log Out', Screen: 'HomeScreen' },
        { Text: 'Delete Profile', Screen: 'DeleteProfile' },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.option}>
                <Text style={{ color: '#219DFF', paddingBottom: 10, paddingTop: 11, fontWeight: 'bold', fontSize: 20, }}>{item.Text}</Text>
            </View>
        );
    }


    return (
        <View>
            <View style={styles.userInfo}>
                <View style={styles.pictureContainer}>
                    <Image
                        style={styles.userImage}
                        source={{
                            uri: 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg',
                        }}
                    />
                </View>
                <View style={styles.namesContainer}>
                    <Text style={styles.userInfoText}>Forest </Text>
                    <Text style={styles.userInfoText}>Jenkins</Text>
                </View>
                <Text style={styles.emailText}>forestbreeze94@gmail.com</Text>
            </View>
            <View style={styles.optionsContainer}>
                <FlatList
                    data={DATA}
                    renderItem={( item ) => {
                        return (
                            <Pressable onPress={() => navigation.navigate(item.item.Screen, item.item.PropText) }>{renderItem(item)}</Pressable>
                        );
                    }}
                    keyExtractor={item => item.Text}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        height: 210,
        borderBottomWidth: 1,
        borderBottomColor: '#219DFF',
        padding: 20,
        paddingTop: 10,
        backgroundColor: '#219DFF',
    },

    userImage: {
        borderRadius: 60,
        height: 120,
        width: 120,
        alignSelf: 'center',
    },

    userInfoText: {
        fontSize: 25,
        color: 'white',
    },
})



export default UserProfile;