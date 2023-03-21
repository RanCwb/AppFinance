import React,{useContext} from "react"
import {View,Text, AccessibilityActionEvent, ActivityIndicator} from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import{ AuthContext} from '../contexts/auth'



function Routes() {

    const {singed,loading} = useContext(AuthContext);
    
    if(loading){
        return(
            <View style={{flex:1, 
            justifyContent:'center',
             alignItems:"center",
            backgroundColor:'#836FFF'}}>


                <ActivityIndicator
                size={100}
                color={'#131313'}

                />


            </View>


        )

    }


    return(

        singed ?  <AppRoutes/> : <AuthRoutes/>

    )

}

export default Routes;