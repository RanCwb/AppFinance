import { Text,View,Button} from "react-native";
import React,{useContext, useEffect, useState} from "react"

import {AuthContext} from '../../contexts/auth'
import {Background,ListBalanc} from'./styles'
import Header from '../../components/Header'
import api from "../../services/api";
import { format } from "date-fns";
import {useIsFocused} from "@react-navigation/native"
import BalanceItem from "../../components/BalanceItem";

export default function Home() {

    const {singOut, user} = useContext(AuthContext)
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())

    const isFocused= useIsFocused()

    useEffect(() =>{

        let isActive = true

        async function getMov(){

            let dateFormated = format(dateMovements, 'dd/MM/yyyy')
            
            const balance = await api.get('/balance',{

                params:{

                    date:dateFormated

                }


            })
            
            if (isActive) {
                setListBalance(balance.data)
            }
        

        }

        getMov();

        return () => isActive = false

    },[isFocused])   


    return(
        <Background>
        
            <Header title="Minhas Movimentações" />
                <ListBalanc
                data={listBalance}
                horizontal={true}       
                keyExtractor={item => item.tag}
                renderItem ={({item}) => (<BalanceItem data={item}/>)}
                showHorizontalScrollIndicator={false}
                />
        </Background>
            
    )
}