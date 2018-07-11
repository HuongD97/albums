// This component is used to fetch a list of album
// data from http://rallycoding.herokuapp.com/api/music_albums
// and rendering a list of cards with each card showing
// details for an album
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'; // Responsible for get requests
import AlbumDetail from './AlbumDetail';

// Create the class based components

// Lifecycle methods - class based compoents advantage over functional components
// Know exactly when it will be rendered to the screen using lifecycle methods
class AlbumList extends Component {
    // Set initial empty
    state = {albums: []};

    // Any time the component is about to be
    // rendered to the screen, this method will be
    // automatically executed
    componentWillMount() {
        // Get all albums from Heroku
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                // setState is defined in Component. setState
                // updates our component's state and it notifies that
                // component's state has changed and to rerender content
                this.setState({albums: response.data});
                console.log(this.state);
            });
    };

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
}

export default AlbumList;
