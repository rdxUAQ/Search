import {TextInput, StyleSheet, Image, View} from 'react-native';
import React from 'react';

const SearchBar = ({value, onChangeText}) => {
    return(
       
        <TextInput
            style={styles.searchBar}
            placeholder="Search Products..."
            multiline={false}
            onChangeText={onChangeText}
            value={value}
        />
        
    )
}

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 13,
        margin: 13,
        borderRadius: 8,
    },
});

export default SearchBar;