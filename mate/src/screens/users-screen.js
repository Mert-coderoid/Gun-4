import React, { useState, useEffect } from 'react'
// Importing components from react-native library.
import { View, Text, StyleSheet, FlatList } from 'react-native'
import api from '../services/api'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


  // create a component
const User = () => {
    // create a state
  const [datas, setDatas] = useState(false)
  // get data from api
  const getData = async () => {
      // use await to wait for the data to be fetched
    await api.get('/users').then(response => {
      setDatas(response.data)
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
  }

  // useEffect is a hook that runs after the component is rendered
  useEffect(() => {
    getData()
  }, [])

    // this is the render function
  return (
    // Using react-natives built in components.
    <View style={styles.container}>
        {/* // Using the FlatList component. */}
      <FlatList
        // keyExtractor is a function that returns a unique key for each item in the array.
        keyExtractor={(item) => item.id}
        // data is the array of data that we want to render.
        data={datas}
        // renderItem is a function that returns a component for each item in the array.
        renderItem={({ item }) => (
          <div style={{}}>
            {/* // Using the Card component. */}
            <Card
              style={{
                width: 400,
                backgroundColor: "#3F3F3F",
                color: "white",
                margin: "auto",
              }}
            >
              <CardContent>
                <Typography
                  style={{ fontSize: 14 }}
                  color="white"
                  gutterBottom
                >
                  {item.email}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  style={{
                    marginBottom: 12,
                  }}
                  color="white"
                >
                  username: {item.username}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.phone}
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ color: "#35D4C7" }} size="small">
                  <Text style={{ color: "white" }}>Address:</Text>
                  <span>&nbsp;&nbsp;</span>{item.address["street"]} /{item.address["city"]} /{item.address["zipcode"]}</Button>
              </CardActions>
            </Card>
            <br></br>
          </div>
        )}
      />
    </View>
  );
}

  // define your styles
export default User;

  // define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#15332C',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    backgroundColor: '#15332C',
    fontSize: 15,
    color: '#fff',
  },


});