import React, {useState} from 'react'

//components
import {Text, View, Modal } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
//styles
import {style, theme, CancelTheme} from './CreateEmployee.styles';


const CreateEmployee =() =>{
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[salary, setSalary] = useState("")
    const[picture, setPicture] = useState("")
    const[modal, setModal] = useState(false)
    return(
        <View style={style.CreateEmployeeWrapper}>
            <TextInput
                label='Name'
                value={name}
                style = {style.FormInputEmail}
                theme ={theme}
                mode="outlined"
                onChangeText={text => setName({ text })}
            />
            <TextInput
                label='Email'
                value={email}
                style = {style.FormInputEmail}
                theme ={theme}
                mode="outlined"
                onChangeText={text => setEmail({ text })}
            />
            <TextInput
                label='phone'
                value={phone}
                style = {style.FormInputEmail}
                theme ={theme}
                mode="outlined"
                keyboardType= "number-pad"
                onChangeText={text => setPhone({ text })}
            />
            <TextInput
                label='salary'
                value={salary}
                style = {style.FormInputEmail}
                theme ={theme}
                mode="outlined"
                keyboardType= "number-pad"
                onChangeText={text => setSalary({ text })}
            />
            <Button 
                style = {style.FormInputButton}
                icon = "upload" 
                mode = "contained" 
                theme ={theme}
                onPress = {()=>setModal(true)}
            >
                Upload Image
            </Button>
            <Button 
                style = {style.FormInputButton}
                icon = "content-save" 
                mode = "contained" 
                theme ={theme}
                onPress = {()=>console.log("Contain save")}
            >
                Save
            </Button>
            <Modal
                animationType= "slide"
                transparent ={true}
                visible={modal}
                onRequestClose ={()=> setModal(false)}
            >
                <View style= {style.ModalViewWrapper}>
                    <View style ={style.ModelButtonView}>
                        <Button 
                            icon ="camera" 
                            mode = "contained" 
                            onPress = {()=>console.log("cammera upload")}
                            theme ={theme}
                        >
                            Cammera
                        </Button>
                        <Button 
                            icon ="image-area" 
                            mode = "contained" 
                            onPress = {()=>console.log("Gallery Upload")}
                            theme ={theme}
                        >
                            Gallery
                        </Button>
                    </View>
                    <Button 
                        icon = "cancel"  
                        theme ={CancelTheme}
                        onPress = {()=>setModal(false)}
                    >
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

export default CreateEmployee;