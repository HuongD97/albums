import React from 'react';
import { View, Text } from 'react-native';

const TextContainer = (props) => {
    return (
        <View style={styles.viewStyle}>{props.children}</View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    }
}

export default TextContainer;
