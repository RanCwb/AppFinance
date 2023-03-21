
import 'react-native-gesture-handler'
import React from "react";
import {StatusBar,  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProv from './src/contexts/auth'


export default function App() {
    return(

        <NavigationContainer>

            <AuthProv>
                <StatusBar
                 backgroundColor="#f0f4ff" barStyle="dark-content"/>
                <Routes/>
            </AuthProv>
        </NavigationContainer>


    )
    
}