import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({

    CreateEmployeeWrapper:{
        flexDirection: "column"

    },
    FormInputEmail:{
        margin: 5
    },
    ModelButtonView:{
        flexDirection: "row",
        justifyContent:"space-around",
        padding: 10,
    },
    ModalViewWrapper:{
        position:"absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fce9de",
        padding: 10,
        paddingBottom:20,
    },
    FormInputButton:{
        margin: 5
    },
});
const theme = {
    colors:{
        primary: "#0676b7"
    }
}
const CancelTheme = {
    colors:{
        primary: "#99142f"
    }
}
export { style, theme, CancelTheme }; 