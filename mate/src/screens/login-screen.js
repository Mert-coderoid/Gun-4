import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native"
import { auth } from "../../firebase-config"
import * as RootNavigation from "../navigator/RootNavigation.js"
import './app.css'
import styled from "styled-components";
import { navigationRef } from "../navigator/RootNavigation.js"
import NextPageButton from '../navigator/navigator'

// create styled.section for login screen

// creating a Ying Yang style for the login screen with styled.section
// styled.section is a function that takes css syntax and converts it to react expo syntax
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
    
    
    `;


// create login screen
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

    // login handler function for login button
    loginHandler = () => {
        console.log("THİS PROPS: ", this.props)
        // signInWithEmailAndPassword is a firebase function
        auth.signInWithEmailAndPassword(this.state.userName, this.state.password).then((uc) => {
            if (uc.user) {
                console.log(uc.user, "giriş yapıldı")
                // if user is logged in, navigate to home screen
                RootNavigation.navigate('MainScreen', { userName: 'Lucy' });
            }
            else {
                console.log("kullanıcı bulunamadı.");
            }
            // if an error occurs, catch the error
        }).catch(err => {
            console.log("MERT HATA BURADA !!! ", err);
        });
    }

    // register handler function for register button
    registerHandler = () => {
        // createUserWithEmailAndPassword is a firebase function
        auth.createUserWithEmailAndPassword(this.state.userName, this.state.password).then((uc) => {
            if (uc.user) {
                console.log("Kullanıcı yaratıldı");
            }
            else {
                console.log("kullancı yaratmak Allah'a mahsustur...")
            }
            // if an error occurs, catch the error
        }).catch(err => {
            console.log("MERT BURAYA BAK !!! \nkullancı yaratmak Allah'a mahsustur... \n", err)
        })

        auth.signOut().then(() => { }).catch(err => { console.log("ERR yaptım oldu: ", err) })

    }

    // creating styles for login screen
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
            width: "170%",
            margin: "25%",
            marginTop: "0%"
        },

        button: {
            padding: 10,
            margin: 10,
            borderRadius: 50,
            height: 50,
            borderWidth: "5px 250px 5px 5px",
        },

        button1: {
            content: '',
            position: "absolute",
            top: "15px",
            left: "55%",
            background: "#fff",
            border: "15px solid #000",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            alignItems: "flex-start",
            justifyContent: "center",
        },

        button2: {
            content: '',
            position: "absolute",
            top: "15px",
            left: "10%",
            background: "#fff",
            border: "15px solid #fff",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            alignItems: "flex-start",
            justifyContent: "center",



        },

        is: {
            marginStart: "-9px",
            color: "white",
            fontSize: "15px",
        },


        gir: {
            marginStart: "-10px",
            fontSize: "15px",
        },



        imageArea: {
            paddingTop: "35%"
        },

        oval: {
            height: "100%",
            width: "173%",
            justifyContent: "center",
        },

        root: {
            // position: "relative",
            // borderColor: "#000000",
            // borderStyle: "solid",
            // width: "auto",
            // borderWidth: "2px 25px 2px 2px",
            // borderRadius: "50%",
            // animation: "roll 40000s infinite",
            // justifyContent : "center",
            // paddingTop :  "35%",
            // alignItems : "center",
            border: "1px solid #fff",
            backgroundColor: "#000000",
            borderBottomEndRadius: "100%",
            borderBottomStartRadius: "100%",
            borderTopLeftRadius: "100%",
            borderTopRightRadius: "100%",

        },

    })


    // render function for login screen
    render() {
        return (
            <View>

                <StyledButton>
                    <StyledButton2></StyledButton2>
                    <StyledButton3></StyledButton3>
                    {/* <imageArea></imageArea> */}

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
                    <View style={{
                            flexDirection:"row", 
                            flex:1,
                            alignItems:"flex-end",
                            justifyContent:"center",
                            width:"175%",
                            marginTop:"5%",
                            backgroundColor:"#000000"
                            }}>
                    <NextPageButton page="ResetPassword" ></NextPageButton>
                    </View>
                    <View style={this.styles.buttonContainer}>
                        <TouchableOpacity style={this.styles.root} onPress={this.loginHandler}>
                            <View style={this.styles.button1}><Text style={this.styles.is}>iş</Text></View>
                            <View style={this.styles.button2}><Text style={this.styles.gir}>Gir</Text></View>
                            <Text style={this.styles.button}>-----</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.styles.root} onPress={this.registerHandler}>
                            <View style={this.styles.button1}><Text style={this.styles.is}>ıt</Text></View>
                            <View style={this.styles.button2}><Text style={this.styles.gir}>Kay</Text></View>
                            <Text style={this.styles.button}>-----</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.registerHandler}>
                        </TouchableOpacity>
                    </View>

                </StyledButton>
            </View>
        );
    }
}

