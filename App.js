import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppNavigation from "./navigation/AppNavigation";
import CategoryReducer from "./store/reducers/categories";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";

const rootReducer = combineReducers({
    categories: CategoryReducer
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigation/>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
