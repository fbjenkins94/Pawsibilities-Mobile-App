import React from 'react';
import { Text, View, FlatList, Pressable, } from 'react-native';
import { styles_ProfileOptions as styles } from '../StyleSheets/Styles.js';

const renderItem = ({ item }) => {
    return (
        <View style={styles.option}>
            <Text style={styles.optionText}>{item.Text}</Text>
        </View>
    );
};

export const ProfileOptions = ({ options, clickFunction }) => {
    return (
        <View style={styles.optionsContainer}>
            <FlatList
                data={options}
                renderItem={(item) => {
                    return (
                        < Pressable
                            onPress={() => { clickFunction(item.item.Screen, item.item.PropText) }}>
                            {renderItem(item)}
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.Text}
            />
        </View>
    )
};