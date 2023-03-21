import React, {createContext,useState,useEffect} from 'react'
import api from '../services/api'
import {useNavigation} from "@react-navigation/native"
import { EventEmitter } from 'react-native/Libraries/vendor/emitter/EventEmitter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const  AuthContext = createContext({
})


function AuthProv({children}) {

    const navigation = useNavigation();
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        async function LoadStorage() {

            const storageUser = await AsyncStorage.getItem('@finApp')

            if (storageUser) {
                
                const response = await api.get('/me', {

                    headers:{

                        'Authorization': `Bearer ${storageUser}`

                    }

                })

                .catch(() =>{


                    setUser('')

                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoading(false);

            }  
            
                setLoading(false)
        }

        LoadStorage();

    },[])

    

    async function singUp(nome, email, password) {

            setLoadingAuth(true)
        try{

            const  response = await api.post('/users',{

                name: nome,
                password: password,
                email: email,

            })

            setLoadingAuth(false)
            navigation.goBack();

        }catch(err){

            console.log("ERRO AO CADASTRAR", err)
            setLoadingAuth(false)
        }
       
    }

    async function singIn(email, password) {

        setLoadingAuth(true)

        try{

            const response = await api.post('/login',{
                email: email,
                password: password


            })

            const {id, name, token} = response.data;

            const data ={

                id,
                name,
                token,
                email

            }

            await AsyncStorage.setItem('@finApp', token)

            api.defaults.headers['Authorization'] = `Bearer ${token}`

           

            setUser({

                id,
                name,
                email

            })

            setLoadingAuth(false)
        }catch(err){


            console.log('ERRO AO LOGAR', err)
                setLoadingAuth(false)
        }
       
    }  

    async function singOut() {

        await AsyncStorage.clear()

        .then(() => {

        
            setUser(null)


        })

        
    }



    return(

            <AuthContext.Provider value={{ 
            singed: !!user, user, singUp,singIn,singOut,
            loadingAuth,loading}}>
                    {children}
            </AuthContext.Provider>

    )
}

export default AuthProv;