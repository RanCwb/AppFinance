import React,{useContext,useState} from "react"
import { Background,Container,AreaInput,Input,SubmitButton,SubmitText} from '../SingIn/styles'
import { Platform,ActivityIndicator, Alert } from "react-native";
import {AuthContext} from '../../contexts/auth'
import { ColorSpace } from "react-native-reanimated";

export default function HandleSingUp() {

    const {singUp,loadingAuth} = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function HandSingUp() {

        if (nome === '' && email ==='' && password ===' ') {
            
                return;
        }   
        singUp(nome, email, password)
    }

    return(

        <Background>
            <Container>

                <AreaInput>
                        <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(e)=> setNome(e)}
                        />
                </AreaInput>
                <AreaInput>
                        <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(e)=> setEmail(e)}
                        />
                </AreaInput>
                <AreaInput>
                        <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(e)=> setPassword(e)}
                        secureTextEntry={true}
                        />
                </AreaInput>

                <SubmitButton onPress={HandSingUp}>

                        {
                            loadingAuth ? 
                            (
                                <ActivityIndicator size={100} color="#fff"/>
                            ) 
                            :
                            (
                                <SubmitText>
                                    Cadastrar
                                </SubmitText>
                            )

                        }
                       

                </SubmitButton>

               
            </Container>
        </Background>


    )
    
}
