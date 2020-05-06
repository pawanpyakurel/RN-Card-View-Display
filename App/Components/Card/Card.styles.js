import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({

    CardWrapper:{
        margin: 2,
        padding: 10,
        borderRadius:10,
    },
    TextWrapperTop:{
        color: '#a314ad',
        fontSize: 20,
        marginLeft:3,
    },
    TextWrapperBottom:{
        color: '#141cad',
        fontSize: 15,
        marginLeft:3,
    }, 
    TextWrapperPhone:{
        color: '#ef5e1a',
        fontSize: 12,
        marginLeft:3,
    },
    ImageWrapper:{
        width: 61.5,
        height: 61,
        borderRadius: 40,
    }, 
    CardViewWrapper:{
        flexDirection:'row',
        // padding: 6
    },
    CardViewWrapperButton:{
        flexDirection: "column",
        paddingTop: 0,
        paddingLeft: 6,
        paddingRight: 6,
    },
    CardViewWrapperTop:{
        position: "relative",
        zIndex: 3,
        width: 65,
        height: 65,
        borderRadius: 40,
        borderColor: '#2a2fc6',
        // backgroundColor:'#cdfba2',
        borderWidth: 2,
        alignItems:"center",
        justifyContent: "center",
    },

});

export { style }; 