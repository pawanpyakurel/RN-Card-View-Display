import React from 'react';
import {FlatList} from 'react-native';

import CardContent from '../Card/Card';

import {View } from 'react-native';

import { FAB } from 'react-native-paper'

import {style} from './CardInfo.styles'

export default CardInfo =()=>{
    const data =[
        {id:1 , name: "Pawan Pyakurel" , position: "Software Engineer", phone : "+977-9867324599", avatar:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"},
        {id:2 , name: "Jiban Pyakurel" , position: "Charter Account", phone : "+977-9789064337", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png"},
        {id:3 , name: "Prabhat Ghimire" , position: "Python Developer", phone : "+977-9865430755", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png"},
        {id:4 , name: "Bikrant Basyal", position: "Graphic Designer", phone : "+977-9851200657", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png"},
        {id:5 , name: "Kamal Aryal" , position: "Backend Developer", phone : "+977-9867324599", avatar:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"},
        {id:6 , name: "Suman Sapkota" , position: "Cricket Lover", phone : "+977-9789064337", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"},
        {id:7 , name: "Sushila Khanal" , position: "Teacher", phone : "+977-9865430755", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"},
        {id:8 , name: "Grishma Khanal", position: "Doctor", phone : "+977-9851200657", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"},
        {id:9 , name: "Deepsu Gautam" , position: "Web Developer", phone : "+977-9867324599", avatar:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"},
        {id:10 , name: "Deepak Gautam" , position: "Artist", phone : "+977-9789064337", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png"},
        {id:11 , name: "Rajesh Hamal" , position: "Nepali Flim Hero", phone : "+977-9865430755", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png"},
        {id:12 , name: "Paras Khadka", position: "Nepali Cricketor", phone : "+977-9851200657", avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"},
    ]    
    return(
        <View> 
            {/* map method the old one

            data && data.map( data=>
                 <CardContent 
                     id = {data.id}
                    name = {data.name}
                    position ={data.position}
                    phone ={data.phone}
                    avatar= {data.avatar}
                />
                
            ) */}
                
            {/* FlatList feature implemeting for replecement of map */}
            <FlatList 
                data = {data}
                renderItem = {({item})=>{
                    return(<CardContent 
                        item = {item}
                    />
                )
                }}
                keyExtractor = {item => `${item.id}`}
            />
            <FAB
                style={style.fab}
                small = {false}
                icon="plus"
                theme={{colors:{accent: "#0676b7"}}}
                onPress={() => console.log('Pressed')}
            />
        </View>
        
    )
}
