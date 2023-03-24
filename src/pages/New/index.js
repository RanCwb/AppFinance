import React,{useState} from "react";
import { Background, Input,SubmitButton,SubmitText} from './styles'
import { SafeAreaView, TouchableWithoutFeedback,Keyboard,Alert } from "react-native";
import Header from '../../components/Header';
import RegisterType from "../../components/RegisterType";
import { format } from "date-fns";
import api from "../../services/api";
import { useNavigation  } from "@react-navigation/native";




export default function New() {

    const navigation = useNavigation();

    const [label, setLabel] = useState('');
    const [valor, setValor] = useState('');
    const [type, setType] = useState('despesa')

    function submit() {
        
        Keyboard.dismiss();
        if (isNaN(parseFloat(valor)) || type === null) {
            alert("Preencha todos os dados")
            return;
        }
        

        Alert.alert(

            'Confirmando dados',
            `Tipo ${type} - valor ${parseFloat(valor)} `,
            [
                {
                    text: 'Cancelar',
                    style:'cancel'

                },
                {
                    text: 'Prossseguir',
                    onPress: () => add()
                }
            ]

        )

    }


    async function add () {
       Keyboard.dismiss();

       await api.post('/receive', {

        description: label,
        value: Number(valor),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')

       })
        


       setLabel('');
       setValor('');
       navigation.navigate('Home')
    }


    return(


        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header
                title="Registrando"
                />
                  <SafeAreaView style={{marginTop:15, alignItems:"center"}}>
                        <Input
                        placeholder="Descrição do registro"
                        value={label}
                        onChangeText={(e) => setLabel(e)}
                        />
        
                        <Input
                        placeholder="Valor Desejado"
                        keyboardType="numeric"
                        onChangeText={(e) => setValor(e)}
                        value={valor}
                        />

               
                        <RegisterType type={type} sendTypeChanged={(item) => setType(item) }/>
                            <SubmitButton onPress={submit}>
                                <SubmitText>Registrar</SubmitText>
                            </SubmitButton>



                </SafeAreaView>


                </Background>
            </TouchableWithoutFeedback>

    )


}
