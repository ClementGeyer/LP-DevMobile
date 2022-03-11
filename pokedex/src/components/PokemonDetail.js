import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const PokemonDetail = ({route}) => {

    const pokemonData = route.params.pokemon

    const styles = StyleSheet.create({
        images: {
          width: 100,
          height: 100,
        }
    })
  
  return (
    <>
        <Image style={styles.images} source={{ uri: pokemonData.sprites.front_default }} ></Image>
        <Image style={styles.images} source={{ uri: pokemonData.sprites.back_default }} ></Image>
    </>
  );
}

export default PokemonDetail