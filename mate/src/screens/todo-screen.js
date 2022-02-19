import React, { useState, useEffect } from 'react'
// Importing components from react-native library.
import { View, Text, StyleSheet, FlatList } from 'react-native'
import api from '../services/api'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const User = () => {
  const [datas, setDatas] = useState(false)

  const getData = async () => {
    await api.get('/todos').then(response => {
      setDatas(response.data)
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    // Using react-natives built in components.
    <View style={styles.container}>

      <h4 style={{ color: "#fff" }}>How to use CardComponent in ReactJS?</h4>


      <FlatList
        keyExtractor={(item) => item.id}
        data={datas}
        renderItem={({ item }) => (
          <div style={{}}>
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
                id:<span>&nbsp;&nbsp;</span>{item.id}
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
                  {item.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.completed}
                </Typography>
              </CardContent>
            </Card>
            <br></br>

          </div>


        )}
      />

    </View>
  );
}

export default User;

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