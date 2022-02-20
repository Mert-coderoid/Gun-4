
// this file for learning purposes only.


import React, { Component } from "react";
import { View, Text } from "react-native";
import NextPageButton from '../navigator/navigator';

    // render the component
export default class DetailsScreen extends Component {

        // this is the first method called when the component is mounted
    constructor(props) {
        // super is a reference to the parent class
        super(props);
    }

        // this is the second method called when the component is mounted
    render() {
        return (
            <View>
                <Text>Bu da Details Screen texti</Text>
                <NextPageButton page="UsersScreen" />
            </View>
        )
    }
}