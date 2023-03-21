import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const AuthStack = createStackNavigator();

function AuthRoutes() {


    return(
        <AuthStack.Navigator>

            <AuthStack.Screen
            name="SingIn"
            component={SingIn}
            options={{
            headerShown:false

            }}
            />

            <AuthStack.Screen
            name="SingUp"
            component={SingUp}
            options={{
            headerStyle:{

                backgroundColor:'#008000',
                borderBottomWidth:2,
                borderBottomColor:'#fff'

            },
            headerTintColor: '#fff',
            headerTitle:'Voltar' ,
            headerBackTitleVisible: false
         


            }}
            />



         </AuthStack.Navigator>

    )


}


export default AuthRoutes;