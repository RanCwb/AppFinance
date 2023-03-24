import React, {useContext} from "react"
import { Container,Message,Name,NewLink,NewText,LougoutButton,LogoutText } from "./styles";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";


export default function Profile() {

    const navigation = useNavigation()

    const {user, singOut} = useContext(AuthContext);

    return(

        <Container>
            <Header
            title="Meu Perfil"
            />


            <Message>
                
        Olá, seja bem vindo!
            
            </Message>

            <Name numberOflines={1}>

               {user && user.name }

            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>

                <NewText>Fazer Registro</NewText>

            </NewLink>

            <LougoutButton onPress={() => singOut()}>

            <LogoutText>Deslogar</LogoutText>

            </LougoutButton>


        </Container>


    )
    
}