import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #f0f4ff;
align-items: center;
`

export const   Message = styled.Text`
font-size: 18px;
font-weight: bold;
margin-top: 24px;

`

export const Name = styled.Text`
font-size: 25px;
margin-bottom: 25px;
margin-top: 10px;
padding: 15px;
color: #121212;
`

export const NewLink = styled.TouchableOpacity`
background-color: #3b3dbf;
width: 90%;
height: 40px;
border-radius: 10px;
align-items: center;
justify-content: center;
margin-bottom: 14px;
`

export const NewText = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;

`

export const LougoutButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 90%;
height: 40px;
border-width: 2px;
border-radius: 10px;
border-color: red;
`

export const LogoutText= styled.Text`
font-size: 20px;
color: red;
font-weight: bold;

`
