import React, {useState}from "react"
import {RegisterContainer,RegisterLabel,RegisterTypeButton} from "./styles"
import Feather from "react-native-vector-icons/Feather"

export default function RegisterType({type,sendTypeChanged}) {

    const [typecheck,setTypeCheck] = useState(type)


    function changeStatus(status) {
        
        if (status === 'receita') {
        setTypeCheck('receita')
        sendTypeChanged('receita')

        } else {
            setTypeCheck('despesa')
            sendTypeChanged('despesa')

        }
    }

    return(

        <RegisterContainer>
            <RegisterTypeButton checked={ typecheck ==="receita" ? true : false}
            onPress={() => changeStatus('receita')}

            >

                <Feather name="arrow-up" size={25} colo="#121212"/>
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>


            <RegisterTypeButton checked={ typecheck ==="despesa" ? true : false }
                 onPress={() => changeStatus('despesa')}

            >
                <Feather name="arrow-down" size={25} colo="#121212"/>
                <RegisterLabel>
                  Despesa
                </RegisterLabel>
            </RegisterTypeButton>

        </RegisterContainer>

    )
    
}