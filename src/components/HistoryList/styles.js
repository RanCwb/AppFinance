import styled from "styled-components/native"

export const Container = styled.View`
background-color: #f4f0ff;
border-radius:5px;
margin-left:10px;
margin-right: 10px;
margin-bottom: 15px;
padding: 12px ;

`
export const TipoText = styled.Text`
color: #fff;
font-size: 20px;
font-style: italic;
`
export const ValoR = styled.Text`
color: #121212;
font-size: 20px;
margin-top: 5px;
`
export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo ==='despesa'?' #c62c36 ': '#008000'};
padding-bottom: 4px;
padding-top: 4px;
padding-left: 8px;
padding-right: 8px;
border-radius: 8px;
`
export const Tipo = styled.View`
flex-direction: row;
`