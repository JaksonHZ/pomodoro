import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2e2e2e',
        padding: 60
    },

    header: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },

    selfie: {
        width: 150,
        height: 150,
        alignItems: 'center',
        borderRadius: 75
    },

    action: {
        margin: 20,
        alignItems: 'center',
    },

    buttonWhatsapp: {
        width: 200,
        backgroundColor: '#25D366',
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 20,
    },

    buttonInstagram: {
        width: 200,
        backgroundColor: '#E1306C',        
        borderRadius: 20,
        marginBottom: 30,
    },

    buttonFacebook: {
        width: 200,
        backgroundColor: '#4267B2',
        borderRadius: 20,
        marginBottom: 30,
    },

    buttonTwitter: {

        width: 200,
        backgroundColor: '#1DA1D2',
        borderRadius: 20,
        marginBottom: 30,
    },

    buttonPikachu: {
        width: 200,
        backgroundColor: '#eead2d',
        borderRadius: 20,
        marginBottom: 30,
    },

    actionText: {
        color: '#FFF'
    },
    
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        margin: -1,
    }

});