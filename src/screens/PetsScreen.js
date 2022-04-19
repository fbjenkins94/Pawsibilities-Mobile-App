import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';



const Dog = ({ navigation, priority }) => {
    DATA = [
        {
            photo: 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg',
            name: 'Frodo',
            sex: 'Female',
            age: 4,
        },
        {
            photo: 'https://bichonfurkids.org/wp-content/uploads/2021/12/Marley_Head.jpg',
            name: 'Bilbo',
            sex: 'Female',
            age: 12,
        },
        {
            photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg',
            name: 'Puggy',
            sex: 'Male',
            age: 8,
        },
    ];
    DATA = DATA.concat(DATA.concat(DATA));

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image
                    style={styles.dogImage}
                    source={{
                        uri: item.photo,
                    }}
                />
                <Text style={{ paddingLeft: 6, fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                <Text style={{ paddingLeft: 6, fontSize: 15 }}>{item.sex}, {item.age}</Text>
            </View>
        );
    }

    return (
        <View style={{ paddingTop: 8 }}>
            <View style={priority == 1 ? styles.myBox1 : (priority == 2 ? styles.myBox2 : styles.myBox3)}>
                <Text style={priority <= 2 ? styles.myText1 : styles.myText2}>{priority == 1 ? 'Emergency' : (priority == 2 ? 'Caution' : 'Safe')}</Text>
            </View>

            <FlatList
                style={{ paddingRight: 20, }}
                data={DATA}
                renderItem={(item) => {
                    return (
                        <Pressable
                            style={styles.petBox}
                            onPress={() => { navigation.navigate('PetProfile') }}>
                            {renderItem(item)}
                        </Pressable>
                    );
                }}
                keyExtractor={item => item.age}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const PetsScreen = ({ navigation }) => {
    return (
        <View style={{ paddingBottom: 45, paddingLeft: 15, backgroundColor: '#F5FCFF' }}>
            <View style={styles.results}>
                <Text>11 pets near you are in danger of euthanasia</Text>
            </View>
            <Dog navigation={navigation} priority={1} />
            <Dog navigation={navigation} priority={2} />
            <Dog navigation={navigation} priority={3} />
        </View>
    )
}


const styles = StyleSheet.create({
    results: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        paddingBottom: 15,
        marginBottom: 15,
        marginTop: 15,
    },

    dogImage: {
        height: 120,
        width: '100%',
        alignSelf: 'center',
    },

    myBox1: {
        backgroundColor: '#FFA3A2',
        borderTopLeftRadius: 8,
        height: 50,
        justifyContent: 'center',

    },
    myBox2: {
        backgroundColor: '#FFAF7A',
        borderTopLeftRadius: 8,
        height: 50,
        justifyContent: 'center',

    },

    myBox3: {
        backgroundColor: '#B7E9F7',
        borderTopLeftRadius: 8,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
    },

    myText1: {
        fontSize: 20,
        marginLeft: 10,
        color: 'red',
    },

    myText2: {
        fontSize: 20,
        marginLeft: 10,
        color: '#01579b',
    },

    petBox: {
        paddingTop: 0,
        height: 170,
        width: 160,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 8,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
    },
})
export default PetsScreen;