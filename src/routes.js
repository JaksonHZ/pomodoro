import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Pomodoro from "./Pomodoro";
import Pikachu from "./Pikachu";

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={ {headerShown: false} }>
                <AppStack.Screen name="Redes" component={Pomodoro} />
                <AppStack.Screen name="Pikachu" component={Pikachu} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

