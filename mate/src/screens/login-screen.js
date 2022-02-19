import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { auth } from "../../firebase-config"
import * as RootNavigation from "../../RootNavigation.js"
import './app.css'
import styled from "styled-components";

const StyledButton = styled.section`

        position: relative;
        background: #fff;
        height: 578px;
        border-color: #000;
        border-style: solid;
        width: auto; 
        border-width: 5px 250px 5px 5px;
        border-radius: 50%;
        animation: roll 40000s infinite;
        justify-content : center,
        padding-top :  35%,
        align-ıtems : center,
    } `

const StyledButton2 = styled.section`
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        background: #fff;
        border: 95px solid #000;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        `;
    
const StyledButton3 = styled.section`
   
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background: #000;
        border: 95px solid #fff;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
    
    `;

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

    styles = StyleSheet.create({
        txtInput: {
            borderWidth: 1.5,
            backgroundColor: "white",
            borderColor: "#7839A8",
            padding: 5,
            marginLeft: 25,
            marginRight: 25,
            margin: 10,

        },

        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 1.5,
            width: "130%",
            margin: "25%",
        },

        button: {
            padding: 10,
            margin: 10,
            borderWidth: 1.5,
            
        },

        imageArea: {
            paddingTop: "35%"
        },
       
        oval: {
            height: "100%",
            width: "173%",
            justifyContent: "center",
        } 
        
        
    })


    render() {
        return (
            <View>

                <StyledButton>
                    <StyledButton2></StyledButton2>
                    <StyledButton3></StyledButton3>
                    <imageArea></imageArea>
                    <View style={this.styles.oval}>
                        <TextInput
                            value={this.state.userName}
                            style={this.styles.txtInput}
                            onChangeText={(text) => {
                                this.setState({
                                    userName: text
                                })
                            }}>
                        </TextInput>

                        <TextInput
                            secureTextEntry
                            value={this.state.password}
                            style={this.styles.txtInput}
                            onChangeText={(newPassword) => {
                                this.setState({
                                    password: newPassword
                                })
                            }}>
                        </TextInput>
                        
                    </View>                   

                    <View style={this.styles.buttonContainer}>
                        <TouchableOpacity onPress={this.loginHandler}>
                            <Text style={this.styles.button}>Giriş</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.registerHandler}>
                            <Text style={this.styles.button}>Kayıt</Text>
                        </TouchableOpacity>
                    </View>
                </StyledButton>
            </View>
        );
    }
}

