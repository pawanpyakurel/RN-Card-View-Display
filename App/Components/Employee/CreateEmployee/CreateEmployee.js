import React, {useState} from 'react'

//components
import {View, Modal, Alert } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
//styles
import {style, theme, CancelTheme} from './CreateEmployee.styles';

//expo image picker
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const CreateEmployee =() =>{
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[salary, setSalary] = useState("")
    const[picture, setPicture] = useState("")
    const[position, setPosition] = useState("")
    const[modal, setModal] = useState(false)

    //submit Data
    const submitData = ()=>{
        //fetch
        fetch("http://192.168.0.102:3000/send-data",{
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                salary:salary,
                picture:picture,
                position:position,
            })
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
        })
    }


    //imge picking from Galery
    const pickFromGalary = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect:[1,1],
                quality: 1
            })
            if(!data.cancelled){
                let newfile = {
                    uri: data.uri, type: `text/${data.uri.split(".")[1]}`, 
                    name: `text/${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
                // console.log(newfile)
            }
        }
        else{
            Alert.alert("Yo Must ALoow Permision to work")
        }
    }
    //imge picking from Cammera
    const pickFromCammera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if (granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect:[1,1],
                quality: 0.5
            })
            if(!data.cancelled){
                let newfile = {
                    uri: data.uri, 
                    type: `text/${data.uri.split(".")[1]}`, 
                    name: `text.${data.uri.split(".")[1]}`
                }
                console.log(newfile)
                handleUpload(newfile)
            }
        }
        else{
            Alert.alert("Yo Must ALoow Permision to work")
        }
    }


    const handleUpload = (image) =>{
        const data = new FormData ()
        data.append("file", image)
        data.append("upload_preset", "pawan-Employee-App")
        data.append("cloud_name", "pawanpyakurel")

        fetch("https://api.cloudinary.com/v1_1/pawanpyakurel/upload",{
            method: "post",
            body: data
        })
        .then(res=>res.json())
        .then(data =>{
            setPicture(data.url)
            setModal(false)
        })
    }
    return(
        <View style={style.CreateEmployeeWrapper}>
            <TextInput
                label='Name'
                {...name}
                value={name}
                style = {style.FormInputEmail}
                theme ={theme}
                mode="outlined"
                onChangeText={text => setName(`${text }`)}
            />
            <TextInput
                label='Email'
                value={email}
                style = {style.FormInputEmail}
                theme ={theme}
                editable 
                mode="outlined"
                onChangeText={text => setEmail(`${text }`)}
            />
            <TextInput
                label='phone'
                value={phone}
                style = {style.FormInputEmail}
                theme ={theme}
                editable 
                mode="outlined"
                keyboardType= "number-pad"
                onChangeText={text => setPhone(`${text }`)}
            />
            <TextInput
                label='salary'
                value={salary}
                style = {style.FormInputEmail}
                theme ={theme}
                editable 
                mode="outlined"
                onChangeText={text => setSalary(`${text }`)}
            />
            <TextInput
                label='position'
                value={position}
                style = {style.FormInputEmail}
                theme ={theme}
                editable 
                mode="outlined"
                onChangeText={text => setPosition(`${text }`)}
            />
            <Button 
                style = {style.FormInputButton}
                icon = {picture=="" ? "upload": "check"} 
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
                onPress = {()=>submitData()}
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
                            onPress = {()=>pickFromCammera()}
                            theme ={theme}
                        >
                            Cammera
                        </Button>
                        <Button 
                            icon ="image-area" 
                            mode = "contained" 
                            onPress = {()=>pickFromGalary()}
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