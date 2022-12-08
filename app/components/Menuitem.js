import React from "react";
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';


const Menuitem = props => {
    return (
        <TouchableHighlight>
            <View>
                <View>
                    <Text>{props.item.name}</Text>
                    <Text>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default Menuitem;