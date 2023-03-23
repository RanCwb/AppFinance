import React,{useState} from "react";
import { Background, Input,SubmitButton,SubmitText} from './styles'
import { SafeAreaView, TouchableWithoutFeedback,Keyboard } from "react-native";
import Header from '../../components/Header';
import RegisterType from "../../components/RegisterType";




export default function New() {

    const [label, setLabel] = useState('');
    const [valor, setValor] = useState('');
    const [type, setType] = useState('despesa')


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
                            <SubmitButton>
                                <SubmitText>Registrar</SubmitText>
                            </SubmitButton>



                </SafeAreaView>


                </Background>
            </TouchableWithoutFeedback>

    )


}
