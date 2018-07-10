import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
// Flexbox refers to how we will position elements

// Flexbox is a system of positioning elements within a container
// justifyContent positions elements in the vertical direction:
// alignItems positions elements in the horizontal direction
const styles = {
    textStyle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Tells element the dimension of the object
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
}

export default Header;
