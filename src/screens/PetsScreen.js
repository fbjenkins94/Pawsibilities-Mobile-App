import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable, ScrollView } from 'react-native';
import NavMenu from '../Components/NavMenu.js';




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

    const renderItem = ({ item, index }) => {
        return (
            <View style={index == 0 ? { ...styles.petBox, ...{marginLeft: 25} } : styles.petBox}>
                <Image
                    style={styles.dogImage}
                    source={{
                        uri: item.photo,
                    }}
                />
                <View style={{width: '100%'}}>
                    <Text style={{ paddingLeft: 6, fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ paddingLeft: 6, fontSize: 15 }}>{item.sex}, {item.age}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={priority == 3 ? { paddingTop: 8, marginBottom: 115 } : { paddingTop: 8 }}>
            <View style={priority == 1 ? styles.myBox1 : (priority == 2 ? styles.myBox2 : styles.myBox3)}>
                <Text style={priority <= 2 ? styles.myText1 : styles.myText2}>{priority == 1 ? 'Emergency' : (priority == 2 ? 'Caution' : 'Safe')}</Text>
            </View>

            <FlatList
                style={{ paddingRight: 20, }}
                data={DATA}
                renderItem={(item) => {
                    return (
                        <Pressable
                            style={styles.shadow}
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
        <View style={{ backgroundColor: "white", /*'#F5FCFF'*/ flex: 1 }}>
            <ScrollView>
            <View style={styles.results}>
                <Text>11 pets near you are in danger of euthanasia</Text>
                </View>


                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={()=>navigation.navigate('SearchScreen')}>
                        <View><Text style={styles.text}>Filter</Text></View>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <View><Text style={styles.text}>Following</Text></View>
                    </Pressable>
                </View>


            <Dog navigation={navigation} priority={1} />
            <Dog navigation={navigation} priority={2} />
                <Dog navigation={navigation} priority={3} />
            </ScrollView>
            <NavMenu
                navOne={() => navigation.navigate('Success', { PropText: 'This page is currently under construction. Check back later!' })}
                navTwo={() => navigation.navigate('PetsScreen')}
                navThree={() => navigation.navigate('UserProfile')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    results: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        paddingBottom: 15,
        marginBottom: 15,
        marginTop: 25,
        marginLeft: 15,
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
        marginLeft: 15,
    },
    myBox2: {
        backgroundColor: '#FFAF7A',
        borderTopLeftRadius: 8,
        height: 50,
        justifyContent: 'center',
        marginLeft: 15,

    },

    myBox3: {
        backgroundColor: '#B7E9F7',
        borderTopLeftRadius: 8,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        marginLeft: 15,

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
        height: 170,
        width: 160,
        marginRight: 8,
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 15
    },

    shadow: {
        shadowColor: 'gray',
        shadowOpacity: 5,
        // background color must be set
        elevation: 3,
        borderWidth: 1,
        borderColor: "white"
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    button: {
        backgroundColor: 'skyblue',
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default PetsScreen;