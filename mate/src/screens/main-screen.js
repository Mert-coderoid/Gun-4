import React, { Component } from 'react'
import { View, Button } from "react-native";
import NextPageButton from '../navigator/navigator';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <NextPageButton page="Home" />
                <NextPageButton page="DetailsScreen" />
            </View>
        )
    }
}
