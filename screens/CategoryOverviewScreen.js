import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import CategoryItem from "../component/categoryItem";


const CategoryOverviewScreen = (props) => {

    const category = useSelector(state => state.categories.category);

    return (
        <FlatList
            style={styles.container}
            data={category}
            keyExtractor={category => category.id}
            renderItem={itemData => <CategoryItem category={itemData.item}/>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});

export default CategoryOverviewScreen;
