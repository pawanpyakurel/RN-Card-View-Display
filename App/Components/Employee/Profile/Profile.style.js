import { StyleSheet } from 'react-native';

const style =  StyleSheet.create({

    profileWrapper:{
        flex: 1
    },
    LinearGradient:{
        height: "20%",
    },
    ProfileImage:{
        width: 140,
        height: 140,
        borderRadius: 140/2,
        marginTop: -50
    },
    ProfileImageWrapper:{
        alignItems: "center",
    },
    TopContentBody:{
        alignItems: "center",
        margin: 15
    },
    ProfileCardWrapper:{
        margin: 3
    },
    ProfileCardContent:{
        flexDirection: "row",
        padding: 8,
   
        // alignItems: "center"
        
    },
    ProfileTitle:{
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5, 
    },
    ProfileBottomWrapper:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    }
});   
export { style }; 