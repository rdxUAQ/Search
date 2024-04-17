import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Image source={product.Image} style = {styles.image}/>

            <View>
                <Text style={styles.textTitle}>{product.name}</Text>
                <Text style={styles.textDescription}>{product.description}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1F7FF',
        margin: 13,
        padding: 13,
        borderRadius: 13,
        flexDirection: 'row',
        
    },
   
    textTitle: {
        
        fontSize: 21,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 13,
    },
    image: {
        marginRight: 13,
        width: 55,
        height: 55,
        resizeMode: 'contain', 
        backgroundColor: '#E1F7F5',
        borderRadius: 13,
    },
});

export default ProductsItems;