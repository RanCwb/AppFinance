import styled from "styled-components/native"

export const RegisterContainer = styled.View`
flex-direction: row;
width: 100%;
padding: 5%;
padding-right: 5%;
justify-content: space-between;
align-items: center;
`

export const RegisterLabel = styled.Text`

color: #121212;
font-size: 20px;

`




export const RegisterTypeButton = styled.TouchableOpacity`
background-color: ${props => props.checked ? '#836FFF' :  '#fff' };
width: 46%;
align-items: center;
justify-content: center;
border-radius: 5px;
border-width: 2px;
border-color: #121212;


`