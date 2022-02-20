import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
   
  // We will do the navigation by calling the variable "NextPageButton"
  // and passing the page name as a parameter.
  
    // Navigate to the selected page
        // How To Use:
            // 1. import NextPageButton from '../navigator/navigator'
            // 2. Add the page name as a parameter in the NextPageButton function
            
const NextPageButton = (paramPage) => {
  //use navigation hook shown as below
  console.log(paramPage.page)
  let text = `Navigate to ${paramPage.page} `
  const navigation = useNavigation();

  
    // Give some style to the button
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      margin : "10px",
    },
  });

    // Render the button
  return (
    <View style={styles.container}>
    <Button
      title={text}
      onPress={() => {
        navigation.navigate(paramPage.page);
      }}
    />
    </View>
  );

}

  // export NextPageButton for use in other files
export default NextPageButton