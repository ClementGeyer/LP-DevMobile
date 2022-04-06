import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const PokemonDetail = ({route}) => {

    const pokemonData = route.params.pokemon

    const styles = StyleSheet.create({
      images: {
        width: 100,
        height: 100,
      },
      frame: {
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: '2%'
      },
      pokemon: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '5%',
      }
    })
  
  return (
    <View style={styles.pokemon}>
      <View style={styles.frame}>
          <Image style={styles.images} source={{ uri: pokemonData.sprites.front_default }} ></Image>
      </View>
      <View style={styles.frame}>
          <Image style={styles.images} source={{ uri: pokemonData.sprites.back_default }} ></Image>
      </View>
    </View>
  );
}

export default PokemonDetail