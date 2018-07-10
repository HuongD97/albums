// This component is used to fetch a list of album
// data from http://rallycoding.herokuapp.com/api/music_albums
// and rendering a list of cards with each card showing
// details for an album
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios'; // Responsible for get requests

// Create the class based components
class AlbumList extends Component {

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    };
}

export default AlbumList;
