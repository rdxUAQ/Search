import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "./Components/SearchBar";
import ProductsList from "./Components/ProductList";
import products from "./Data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearch(text);

    if (text === '') {
      setFilteredProducts(products);
    } else {
      
      const filtered = products.filter((product) => {
        if(typeof product.name === 'string' && typeof text === 'string')
        {
          return product.name.toLowerCase().includes(text.toLowerCase());
        }
        return false;
      });
      setFilteredProducts(filtered);
    }
  }
    return(
        <LinearGradient colors={['#1E0342', '#0E46A3', '#9AC8CD']}>
        <View style={styles.container}>
        <View style={styles.content}>
          <SearchBar value={search} onChangeText={handleSearch} />
            <ProductsList products={filteredProducts} />


            
        </View>
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
    content: {
        
        margin: 55,
        padding: 5,
        borderRadius:8,
      
    },
    textTitle: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 13,
    },
});

export default App;
