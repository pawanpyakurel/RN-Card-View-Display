import React, {useState} from 'react'

//components
import {Text, View, Modal, Image } from 'react-native';

import { style } from './Profile.style';

import { LinearGradient } from 'expo-linear-gradient';

import {Title, Card, Button} from "react-native-paper";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {theme, CancelTheme} from "../CreateEmployee/CreateEmployee.styles"

const Profile = () =>{
    return (
        <View style ={style.profileWrapper}>
            <LinearGradient 
                colors ={["#084de2", "#85c6ff"]}
                style ={style.LinearGradient}
            />
            <View style= {style.ProfileImageWrapper}>
                <Image 
                    style ={ style.ProfileImage}
                    source={{uri: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80"}}
                />
            </View>
            <View style={style.TopContentBody}>
                <Title> Maherndra Singh Dhoni</Title>
                <Text style= {{fontSize: 18}}> Indian Cricketor </Text>
            </View>
            <Card 
                style={style.ProfileCardWrapper}
                
            > 
                <View style = {style.ProfileCardContent}>
                    <MaterialIcons name="email" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> msdhoni@hotmail.com </Text>
                </View>
            </Card>
            <Card 
                style={style.ProfileCardWrapper}
                
            > 
                <View style = {style.ProfileCardContent}>
                    <Entypo name="phone" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> +977-9654356788 </Text>
                </View>
            </Card>
            <Card 
                style={style.ProfileCardWrapper}
                
            > 
                <View style = {style.ProfileCardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> msdhoni@hotmail.com </Text>
                </View>
            </Card>
            <View style={style.ProfileBottomWrapper}>
                <Button 
                    // style = {style.FormInputButton}
                    icon = "account-edit" 
                    mode = "contained" 
                    theme ={theme}
                    onPress = {()=>console.log("Contain save")}
                >
                    Edit
                </Button>

                <Button 
                    // style = {style.FormInputButton}
                    icon = "delete" 
                    mode = "contained" 
                    theme ={CancelTheme}
                    onPress = {()=>console.log("Employee Fired")}
                >
                    Fire Employee
                </Button>
            </View>
        </View>
    )
}

export default Profile;