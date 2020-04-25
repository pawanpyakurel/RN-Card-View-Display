import React from 'react'
import {Text, View } from 'react-native';

//components
import CardInfo from "../App/Components/CardInfo/CardInfo";

import CreateEmployee from '../App/Components/Employee/CreateEmployee/CreateEmployee';

import Profile from "../App/Components/Employee/Profile/Profile"

//styles 
import { style } from './Home.styles'

const Home =() =>{
    return(
        <View style= {style.HomeWrapper}>
            <CardInfo />

            {/* <CreateEmployee /> */}

            {/* <Profile /> */}
        </View>
    );
}

export default Home;
