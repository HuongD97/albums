// This component is used to format and show an album's details
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import TextContainer from './TextContainer';

// Functional component
const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image
    } = album;

    const {
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <TextContainer>
                    <Text style={headerTextStyle}>Title: {title}</Text>
                    <Text>Artist: {artist}</Text>
                </TextContainer>
            </CardSection>
            <CardSection>
                    <Image
                        style={imageStyle}
                        source={{ uri: image }}
                    />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

// Expose the component
export default AlbumDetail;
