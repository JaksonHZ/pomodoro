import React from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Linking, Button, FlatList } from "react-native";

import styles from './styles';
import selfie from '../assets/selfie.png';
import facebook from '../assets/facebook.png';
import whatsapp from '../assets/whatsapp.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';



export default function Pomodoro() {

    const navigation = useNavigation();

    function navigateToPikachu() {
        navigation.navigate('Pikachu');
    }

    function sendWhatsapp(){
        Linking.openURL(`https://api.whatsapp.com/send?phone=5561981639897`);
    }

    function sendInstagram(){
        Linking.openURL("https://instagram.com/jaksonhz");
    }

    function sendFacebook(){
        Linking.openURL("https://www.facebook.com/zheng.jie.9638");
    }

    function sendTwitter(){
        Linking.openURL("https://twitter.com/jaksonhz");
    }

    return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.selfie} source={selfie}/>
                </View>

                <View style={styles.body}>

                    <View style={styles.buttonWhatsapp}>
                        <Image style={styles.icon} source={whatsapp} />
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                                <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonInstagram}>
                        <Image style={styles.icon} source={instagram} />
                        <TouchableOpacity style={styles.action} onPress={sendInstagram}>
                                <Text style={styles.actionText}>Instagram</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonFacebook}>
                        <Image style={styles.icon} source={facebook} />
                        <TouchableOpacity style={styles.action} onPress={sendFacebook}>
                                <Text style={styles.actionText}>Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonTwitter}>
                        <Image style={styles.icon} source={twitter} />
                        <TouchableOpacity style={styles.action} onPress={sendTwitter}>
                                <Text style={styles.actionText}>Twitter</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonPikachu}>
                        <TouchableOpacity style={styles.action} onPress={navigateToPikachu}>
                                <Text style={styles.actionText}>Pikachu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}