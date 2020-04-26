import React from 'react'
import {Text, View } from 'react-native';

//components
import CardInfo from "../App/Components/CardInfo/CardInfo";

import CreateEmployee from '../App/Components/Employee/CreateEmployee/CreateEmployee';

import Profile from "../App/Components/Employee/Profile/Profile";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//styles 
import { style } from './Home.styles'


const HomeStack = createStackNavigator();
const HeaderOption = {
    title: "Home Screen",
    headerTintColor: "white",
    
    headerStyle:{
        backgroundColor: "#a7832f",
    },
}

const Home =() =>{

    return(
        <View style= {style.HomeWrapper}>
            {/* <CardInfo /> */}

            {/* <CreateEmployee /> */}

            {/* <Profile /> */}


            {/* Navigator  */}
            <HomeStack.Navigator 
                screenOptions={{
                    cardStyle: { backgroundColor: "#f8ddb9" }
                }}
            >
                <HomeStack.Screen 
                    name="Home" 
                    component={CardInfo}
                    options = {HeaderOption}
                />
                <HomeStack.Screen 
                    name="Create" 
                    component={CreateEmployee}
                    options = {{...HeaderOption, title: "Create Profile"}}
                />
                <HomeStack.Screen 
                    name="Profile" 
                    component={Profile} 
                    options = {{...HeaderOption, title: "Profile Section"}}
                />
            </HomeStack.Navigator>
           
        </View>
    );
}

export default ()=>{
    return (
        <NavigationContainer >
            <Home  />
        </NavigationContainer>
    )
}
