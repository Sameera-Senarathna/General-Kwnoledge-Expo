import React from 'react';
import {FlatList, View, StyleSheet, Text, Image} from 'react-native';
import {useSelector} from "react-redux";


const CategoryOverviewScreen = (props) => {

    const category = useSelector(state => state.categories.category);

    return (
        <FlatList
            style={styles.listStyle}
            data={category}
            keyExtractor={category => category.id}
            renderItem={itemData => {
                return (
                    <View>
                        <Text> { itemData.item.name } </Text>
                        <Image source={itemData.item.imageUrl} style={styles.image}/>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 20
    },
    image: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: '#ccc'
    }
});
export default CategoryOverviewScreen;
