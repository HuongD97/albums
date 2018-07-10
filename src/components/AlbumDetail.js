// This component is used to format and show an album's details
import React from 'react';
import { View, Text } from 'react-native';

// Functional component
const AlbumDetail = (props) => {
    // Each album contains these properties:
    // title
    // artist
    // url
    // image
    // thumbnail_image
    
    return (
        <View>
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
        </View>
    );
};

const styles = {

}

// Expose the component
export default AlbumDetail;
