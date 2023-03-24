import React, {useContext} from "react"
import { View,Text,Image } from "react-native";

import { DrawerItemList, DrawerContentScrollView, dr, DrawerItem} from "@react-navigation/drawer";
import { AuthContext } from "../../contexts/auth";


export default function CustomDrawer(props) {

    const {user,singOut} = useContext(AuthContext)

    return(

        <DrawerContentScrollView>
            <View style={{alignItems:"center", justifyContent:"center", marginTop:25}}>
                <Image
                source={require('../../assets/HAND.png')}
                style={{width:90, height:90}}
                resizeMode="contain"

                />

                <Text
                style={{fontSize:25, marginBottom:5}}
                >
                Bem vindo!</Text>

                <Text style={{fontSize:20, fontWeight:"bold", marginBottom:15, paddingHorizontal:20}}>
                   {user && user.name}
                </Text>
            </View>


         <DrawerItemList {...props} />

            <DrawerItem
                label="Sair do app"
                onPress={() => singOut() }
            />

        </DrawerContentScrollView>


    )


}