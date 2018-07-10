// This component is used to format and show an album's details
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

// Functional component
const AlbumDetail = (props) => {
    // Each album contains these properties:
    // title
    // artist
    // url
    // image
    // thumbnail_image

    return (
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );
};

const styles = {

}

// Expose the component
export default AlbumDetail;
