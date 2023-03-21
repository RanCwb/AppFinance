import { View, Text, Alert } from "react-native";
import  React,{useState,useContext} from "react"
import { Background, Logo,Container,AreaInput,Input,SubmitButton,SubmitText,Link,LinkText,} from './styles';
import {  useNavigation} from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";




export default function SingIn() {
    const {loadingAuth,singIn} = useContext(AuthContext)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        
        singIn(email, password);
    }

    return(

        <Background>
                
            <Container>
                <Logo
                source={require('../../assets/HAND.png')}
              
                />

                <AreaInput>
                     <Input
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                     />  

                </AreaInput>

                <AreaInput>
                     <Input
                        placeholder="Sua Senha"
                        value={password}
                        onChangeText={(e)=>setPassword(e)}
                     />  

                </AreaInput>

                <SubmitButton activeOpacity={0.3} onPress={login} >
                        <SubmitText >
                            Acessar
                        </SubmitText>
                </SubmitButton>

                    <Link onPress={() => navigation.navigate('SingUp')} > 
                        <LinkText>Criar uma conta já!</LinkText>
                    </Link>


            </Container>
        </Background>

    )
    
}