import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles_ProfileBanner as styles } from '../StyleSheets/Styles.js';

export const ProfileBanner = ({ image, name, email, edit }) => {
    return (
        <View style={edit ? styles.editUserInfo : styles.userInfo}>
            <View style={styles.pictureContainer}>
                <Image
                    style={edit ? styles.editUserImage : styles.userImage}
                    source={{ uri: image }} />
            </View>
            {!edit ?
                <View style={styles.namesContainer}>
                    <Text style={styles.userInfoText}>{name} </Text>
                </View> :
                null}
            {!edit ?
                <Text style={styles.emailText}>{email}</Text> :
                null}
        </View>
    )
};