
import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NextPageButton = (paramPage) => {
  //use navigation hook shown as below
  console.log(paramPage.page)
  let text = `Navigate to ${paramPage.page} `
  const navigation = useNavigation();

  return (
    // <NextPageButton exact path="/details/:id" render={(props) => (
    //   <DetailsPage id={props.match.params.id}/>
    // )} />
    <Button
      title={text}
      style={styles.button}
      onPress={() => {
        navigation.navigate(paramPage.page);
      }}
    />
  );

  const styles = StyleSheet.create({
    button: {
      marginTop: "10px"
    }
  })
}

export default NextPageButton