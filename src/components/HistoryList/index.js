
import React from "react";
import { Container,TipoText,Tipo,IconView,ValoR  } from "./styles";
import Icon from "react-native-vector-icons/Feather"
import {Alert,TouchableWithoutFeedback} from "react-native"


export default  function HistoryList({data, deleteItem}) {

    function delety() {

        Alert.alert(
        'Atenção',
        'Você tem certeza que deseja deletar esse registro?',
        [
            {
                text:'Cancelar',
                style:'cancel'
            },
            {
                text:'Continuar',
                onPress: () => deleteItem(data.id)
            }
        ]

        )
        
    }

    return(
    <TouchableWithoutFeedback onLongPress={delety}>
        <Container>
            <Tipo>
                <IconView tipo={data.type}>
                    <Icon 
                     name={data.type ==="despesa"? 'arrow-down': 'arrow-up'}
                      size={20} 
                      color="#fff"
                
                      />
                    <TipoText>{data.type}</TipoText>
                </IconView>
            </Tipo>

            <ValoR>
                R$ {data.value}
            </ValoR>
        </Container>
</TouchableWithoutFeedback>



    )

}