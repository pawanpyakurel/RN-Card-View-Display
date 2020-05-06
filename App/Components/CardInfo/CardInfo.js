import React,{useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, Alert} from 'react-native';

import CardContent from '../Card/Card';

import {View } from 'react-native';

import { FAB } from 'react-native-paper'

import {style} from './CardInfo.styles'

export default CardInfo =({navigation})=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])

    const fetchData = () =>{
        fetch("http://192.168.0.102:3000/index")
        .then(res => res.json())
        .then(results =>{
            setData(results)
            setLoading(false)
        })
        .catch (error => {
            Alert.alert(error)
        })
    }

    useEffect (()=>{
        fetchData()
    },[])

    return(
        <View style={{flex: 1, marginTop: 3}}>
            {
                loading ?
                <ActivityIndicator size ="large" color = "#0000ff" /> :
                <FlatList 
                    data = {data}
                    renderItem = {({item})=>{
                        return(<CardContent 
                            item = {item}
                            navigation= {navigation}
                        />
                    )
                    }}
                    keyExtractor = {item => `${item.id}`}
                    onRefresh = {()=> fetchData ()}
                    refreshing={loading}
                />
            }
            
            <FAB
                style={style.fab}
                small = {false}
                icon="plus"
                theme={{colors:{accent: "#0676b7"}}}
                onPress={() =>navigation.navigate("Create") }
            />
        </View>
        
    )
}
