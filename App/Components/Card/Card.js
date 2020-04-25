import React from 'react'

import { Card, FAB } from 'react-native-paper'
import { style } from './Card.styles';
import {Text, Image, View, ScrollView } from 'react-native';

const CardContent = ({item}) =>{
    // console.log(props)

    const {name, position, phone, avatar} = item
    return(
        <ScrollView>
            <Card style= {style.CardWrapper}>
                <View style = {style.CardViewWrapper}> 
                    <View style = {style.CardViewWrapperTop}> 
                        <Image 
                            style ={style.ImageWrapper}
                            source = {{uri: avatar}}
                        />
                    </View>
                    <View style = {style.CardViewWrapperButton}> 
                        <Text style ={ style.TextWrapperTop}> {name}</Text>
                        <Text style ={ style.TextWrapperBottom}> {position} </Text>
                        <Text style ={ style.TextWrapperPhone}> {phone}</Text>
                    </View>
                </View>
            </Card>
        </ScrollView>
    );
}

export default CardContent
