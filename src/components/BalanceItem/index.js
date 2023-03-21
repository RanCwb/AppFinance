import React,{useMemo} from "react"
import{Container,Label, Balance} from './styles'

export default function BalanceItem({data}){

    const labelName = useMemo(()=>{

        if(data.tag === 'saldo') {
            
            return{

                label: 'Saldo atual',
                color: '3b3bdf'

            }
        }else if(data.tag === 'receita'){

            return{

                label:'Entradas Hoje',
                color: '00b94a'

            }

        }else{

            return{

                label:'Saidas de Hoje',
                color: 'ef463a'

            }


        }



    },[data])



    return(


            <Container bg={labelName.color}> 

            <Label> {labelName.label} </Label>
            <Balance>R${data.saldo}</Balance>

            </Container>




    )


}