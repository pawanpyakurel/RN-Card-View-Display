import React from 'react'

import { Card } from 'react-native-paper'
import { style } from './Card.styles';
import {Text, Image, View, ScrollView } from 'react-native';

const CardContent = ({item, navigation}) =>{
    const {name, position, phone, picture} = item
    return(
        <ScrollView>
            <Card style= {style.CardWrapper}
                onPress ={()=> navigation.navigate("Profile", {item})}
            >
                <View style = {style.CardViewWrapper}> 
                    <View style = {style.CardViewWrapperTop}> 
                        <Image 
                            style ={style.ImageWrapper}
                            source = {{uri: picture}}
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
