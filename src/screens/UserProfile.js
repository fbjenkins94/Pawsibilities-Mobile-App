import React from 'react';
import { View } from 'react-native';
import { NavMenu } from '../Components/NavMenu.js';
import { ProfileBanner } from '../Components/ProfileBanner.js';
import { ProfileOptions } from '../Components/ProfileOptions.js';
import { styles_UserProfile as styles } from '../StyleSheets/Styles.js';

export const UserProfile = ({ navigation }) => {
    const DATA = [
        { Text: 'Edit Profile', Screen: 'EditProfile' },
        { Text: 'Change Password', Screen: 'ChangePassword' },
        { Text: 'Donate', Screen: 'Success', PropText: { PropText: 'This page is currently under construction. Check back later!' } },
        { Text: 'Log Out', Screen: 'HomeScreen' },
        { Text: 'Delete Profile', Screen: 'DeleteProfile' },
    ];

    return (
        <View style={styles.userProfileContainer}>
            <ProfileBanner
                image={'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg'}
                name={'Forest Jenkins'}
                email={'fbjenkins94@gmail.com'} />
            <ProfileOptions
                options={DATA}
                clickFunction={(navOption, navText) => { navigation.navigate(navOption, navText) }} />
            <View style={styles.blankSpace}>
            <NavMenu
                navOne={() => navigation.navigate('Success', { PropText: 'This page is currently under construction. Check back later!' })}
                navTwo={() => navigation.navigate('PetsResults')}
                navThree={() => navigation.navigate('UserProfile')} /></View>
        </View>
    );
};