import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

// Notes:
// justifyContent can be used to space items within
// a container horizontally or vertically. The default,
// if flexDirection is not specified is column.
// So if container style is justifyContent: 'space-around'
// then the elements within the container will be spaced equally in the vertical
// direction with equal padding from top and bottom. To specify the direction
// of justifyContent just use flexDirection: 'column' or flexDirection: 'row'
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection;
