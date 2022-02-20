import React, { Component } from 'react'
import { View } from "react-native";
import NextPageButton from '../navigator/navigator';

    // render the component
    // export the component
export default class MainScreen extends Component {
        // this is the first method called when the component is mounted
    constructor(props) {
        // super is a reference to the parent class
        super(props);
    }

        // this is the second method called when the component is mounted
        // render the component
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                paddingTop: "35%"
            }}>
                    {/* // called NextPageButton component */}
                <NextPageButton page="Home" />
                <NextPageButton page="UsersScreen" />
                <NextPageButton page="TodoScreen" />

                    {/* <Tabs> on the trial phase */}
                {/* <Tabs /> */}
            </View>
        )
    }
}
