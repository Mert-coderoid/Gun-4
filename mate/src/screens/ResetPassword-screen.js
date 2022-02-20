import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
// Importing components from react-native library.
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

    // create a ResetPassword function that takes in the email and password
const ResetPassword = () => {
    // useState is a hook that allows us to create a state variable
  const [email, setEmail] = useState('')
    // create a navigation object that allows us to navigate to other screens
  const navigation = useNavigation()

    // create a function that takes in the email and password and sends the email and password to firebase
  const sendItems = () => {
    navigation.navigate("LoginScreen");
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={sendItems}>
          <Text style={styles.buttonText}>Send Password</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};


    // create a styles object that contains all of the styling for the ResetPassword screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ResetPassword;

