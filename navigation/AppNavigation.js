import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import CategoryOverviewScreen from "../screens/CategoryOverviewScreen";

const StackNavigation = createStackNavigator();

const AppNavigation = () => {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="CategoryOverviewScreen" component={CategoryOverviewScreen} />
        </StackNavigation.Navigator>
    );
};


export default AppNavigation;