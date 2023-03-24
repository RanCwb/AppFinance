import {TouchableOpacity} from "react-native";
import React,{useContext, useEffect, useState} from "react"

import {AuthContext} from '../../contexts/auth'
import {Background,ListBalanc,Title, Area,List} from'./styles'
import Header from '../../components/Header'
import api from "../../services/api";
import { format, set } from "date-fns";
import {useIsFocused} from "@react-navigation/native"
import BalanceItem from "../../components/BalanceItem";
import Icon from "react-native-vector-icons/MaterialIcons"
import HistoryList from "../../components/HistoryList";
import { isExperimentalWebImplementationEnabled } from "react-native-gesture-handler/lib/typescript/EnableExperimentalWebImplementation";

export default function Home() {

    const {singOut, user} = useContext(AuthContext)
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [movements,setMovements] = useState([])

    const isFocused= useIsFocused()

    useEffect(() =>{

        let isActive = true

        async function getMov(){

            let dateFormated = format(dateMovements, 'dd/MM/yyyy')


            const receive = await api.get('/receives',{
                params:{

                    data: dateFormated

                }

 

            })


            
            const balance = await api.get('/balance',{

                params:{

                    date:dateFormated

                }


            })
            
            if (isActive) {
                setListBalance(balance.data)
                setMovements(receive.data)
            }
        

        }

        getMov();

        return () => isActive = false

    },[isFocused,dateMovements])   

    async function deleteRegister(id){

        try{

            await api.delete('/receives/delete', {

                params:{

                    item_id: id

                }


            })

            setDateMovements(new Date())

        }catch(err){

        console.log(err)


        }
        
    }


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

                <Area>
                    <TouchableOpacity>
                        <Icon name="event" color="#121212" size={30}/>

                    </TouchableOpacity>
                
                    <Title> Ultimas Movimentações</Title>
                </Area>

                <List
                data={movements}
                keyExtractor={e => e.id}
                renderItem={({item}) =>  <HistoryList data={item} deleteItem={deleteRegister}/>}
                showVerticalScrollIndicator={false}
                contentContainerStyle={{paddinBottom: 20}}
                /> 



        </Background>
            
    )
}