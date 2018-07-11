import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        // Expand the component to fill the entire area of the device
        // with the flex: 1
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
