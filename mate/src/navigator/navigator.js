import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
StyleSheet = require('react-native').StyleSheet;


const NextPageButton = (paramPage) => {
  //use navigation hook shown as below
  console.log(paramPage.page)
  let text = `Navigate to ${paramPage.page} `
  const navigation = useNavigation();

  const css = StyleSheet.create({

    button: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
      backgroundColor: '#7839A8',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#fff',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return (
    // <NextPageButton exact path="/details/:id" render={(props) => (
    //   <DetailsPage id={props.match.params.id}/>
    // )} />
    <Button
      style={css.button}
      title={text}
      onPress={() => {
        navigation.navigate(paramPage.page);
      }}
    />
  );

}

export default NextPageButton