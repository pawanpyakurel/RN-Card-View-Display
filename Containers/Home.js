import React from 'react'
import {Text, View } from 'react-native';

//components
// import CardContent from "../App/Components/Card/Card"
import CardInfo from "../App/Components/CardInfo/CardInfo"

//styles 
import { style } from './Home.styles'

const Home =() =>{
    return(
        <View style= {style.HomeWrapper}>
            {/* <CardContent /> */}
            <CardInfo />
        </View>
    );
}

export default Home;
