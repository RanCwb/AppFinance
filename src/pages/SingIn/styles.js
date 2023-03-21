import styled from 'styled-components/native'


export const Background = styled.View`

    flex:1;
    background-color:#836FFF	

`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items:center;
    justify-content:center;
  
`
export const AreaInput = styled.View`

flex-direction: row;

`

export const Input = styled.TextInput`

background-color: #fff;
width: 90%;
border-radius: 8px;
font-size: 20px;
padding: 10px;
color: #121212;
margin-bottom: 15px;
`

export const Logo = styled.Image`


margin-bottom: 30px ;


`
export const SubmitButton = styled.TouchableOpacity`
width: 90%;
background-color:#008000;
height:  50px;
border-radius:8px;
margin-top: 10px;
justify-content: center;
align-items: center;

`

export const SubmitText = styled.Text`
font-size: 20px;
color: #fff;
`

export const Link = styled.TouchableOpacity`

margin-top:10px;
margin-bottom: 10px;

`

export const LinkText = styled.Text`

color: #fff;
font-size: 18px ;
margin-top:5px

`