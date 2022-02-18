import React, { Component } from "react";
import { View, Text } from "react-native";
import NextPageButton from '../navigator/navigator';

export default class TodoScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Bu da Todo Screen texti</Text>
                <NextPageButton page="MainScreen" />
            </View>
        )
    }
}