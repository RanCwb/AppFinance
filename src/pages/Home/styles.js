import { SafeAreaView ,FlatList} from 'react-native-safe-area-context';
import styled from 'styled-components/native'




export const Background = styled.SafeAreaView`
    flex: 1;
    background-color:'#f4f0ff' ;




`;

export const ListBalanc = styled.FlatList`

max-height: 190px;

`

export const Area = styled.View`
padding-top: 15px;
margin-top:25px ;
background-color: #fff;
border-radius: 5px;
flex-direction: row;
padding-left: 14px;
padding-right: 14px;
align-items: baseline;

`

export const Title = styled.Text`
margin-left: 5px;
color: #121212;
margin-bottom: 14px;
font-weight: bold;
font-size: 18px;
`

export const List = styled.FlatList`
flex: 1;
background-color:#fff;
`

