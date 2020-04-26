import React, {useState} from 'react'

//components
import {Text, View, Linking, Image, Platform } from 'react-native';

import { style } from './Profile.style';

import { LinearGradient } from 'expo-linear-gradient';

import {Title, Card, Button} from "react-native-paper";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {theme, CancelTheme} from "../CreateEmployee/CreateEmployee.styles"

const Profile = (props) =>{
    const {name, position, phone, avatar, email, salary} = props.route.params.item

    const openDial = () =>{
        if(Platform.OS === "android"){
            Linking.openURL("tel: 12345")
        }
        else{
            Linking.openURL("telprompt: 12345")
        }
    }
    return (
        <View style ={style.profileWrapper}>
            <LinearGradient 
                colors ={["#084de2", "#85c6ff"]}
                style ={style.LinearGradient}
            />
            <View style= {style.ProfileImageWrapper}>
                <Image 
                    style ={ style.ProfileImage}
                    source={{uri: avatar}}
                />
            </View>
            <View style={style.TopContentBody}>
                <Title>{name}</Title>
                <Text style= {{fontSize: 18}}> {position} </Text>
            </View>
            <Card 
                style={style.ProfileCardWrapper}
                onPress ={()=>{
                    Linking.openURL("mailto: msdhoni@hotmail.com")
                }}
            > 
                <View style = {style.ProfileCardContent}>
                    <MaterialIcons name="email" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> {email} </Text>
                </View>
            </Card>
            <Card 
                style={style.ProfileCardWrapper}
                onPress ={()=>{
                    openDial();
                }}
                
            > 
                <View style = {style.ProfileCardContent}>
                    <Entypo name="phone" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> {phone} </Text>
                </View>
            </Card>
            <Card 
                style={style.ProfileCardWrapper}
                
            > 
                <View style = {style.ProfileCardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#0676b7" />
                    <Text style= {style.ProfileTitle}> {salary} </Text>
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
                    Fire
                </Button>
            </View>
        </View>
    )
}

export default Profile;