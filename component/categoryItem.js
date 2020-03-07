import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CategoryItem = ({category}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Click')}>
                <View style={styles.imageContainer}>
                    <Image source={category.imageUrl} style={styles.image}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}> {category.name} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        height: 150,
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '80%',
        overflow: 'hidden'
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 18
    },
    textContainer: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryItem;
