import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { auth } from "../../firebase-config"
import * as RootNavigation from "../../RootNavigation.js"


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        console.log("İlk Constructor Çalıştı...");
        console.log("Cons tructor Çalıştı...");
        this.state = {
            userName: "yilmazmert1501@gmail.com",
            password: "123456"
        }
    }
    styles = StyleSheet.create({
        txtInput: {
            borderWidth: 1.5,
            backgroundColor: "white",
            flex: 1,
            borderColor: "#7839A8",
            padding: 5,
            margin: 10,
        },

        buttonContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
        },

        imageArea: {
            paddingTop: "35%"
        },

        oval: {
            borderWidth: 1.5,
            borderColor: "#003406",
            backgroundColor: "#FF3214",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 250,
            borderBottomRightRadius: 250,
            // justifyContent : 'center',
            // paddingTop :  "35% ",
            // alignItems : 'center',
            height: "85%"
        }
    })

    loginHandler = () => {
        console.log("THİS PROPS: ", this.props)
        auth.signInWithEmailAndPassword(this.state.userName, this.state.password).then((uc) => {
            if (uc.user) {
                console.log(uc.user, "giriş yapıldı")
                RootNavigation.navigate('MainScreen', { userName: 'Lucy' });
            }
            else {
                console.log("kullanıcı bulunamadı.");
            }
        }).catch(err => {
            console.log("MERT HATA BURADA !!! ", err);
        });
    }

    registerHandler = () => {
        auth.createUserWithEmailAndPassword(this.state.userName, this.state.password).then((uc) => {
            if (uc.user) {
                console.log("Kullanıcı yaratıldı");
            }
            else {
                console.log("kullancı yaratmak Allah'a mahsustur...")
            }
        }).catch(err => {
            console.log("MERT BURAYA BAK !!! \nkullancı yaratmak Allah'a mahsustur... \n", err)
        })

        auth.signOut().then(() => { }).catch(err => { console.log("ERR yaptım oldu: ", err) })

    }

    render() {
        return (
            <View style={this.styles.oval}>
                <View style={this.styles.imageArea}>

                </View>
                <View>
                    <TextInput
                        style={this.styles.txtInput}
                        value={this.state.userName}
                        onChangeText={(text) => {
                            this.setState({
                                userName: text
                            })
                        }}>
                    </TextInput>

                    <TextInput style={this.styles.txtInput}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(newPassword) => {
                            this.setState({
                                password: newPassword
                            })
                        }}>
                    </TextInput>
                </View>

                <View style={this.styles.buttonContainer}>
                    <TouchableOpacity onPress={this.loginHandler}>
                        <Text style={{ color: 'white' }}>Giriş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.registerHandler}>
                        <Text style={{ color: 'white' }}>Kayıt</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

