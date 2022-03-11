import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getPokemon } from '../providers/ApiPokemon';

export default function Pokemon(props) {

    const [pokemonData, setPokemonData] = useState(null)

    const styles = StyleSheet.create({
      images: {
        width: 100,
        height: 100,
      },
      text: {
        textAlign: 'center'
      },
      pokemon:{
        border: '1px solid red',
        width: '15%'
      },
      frame: {
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      pokemon: {
        width: '10%',
        textAlign: 'center',
        margin: '10px',
      }
    });
      

    useEffect(() => {
        if(!pokemonData){
            getPokemon(props.pokemon.item.url).then(data => {
                setPokemonData(data)
            })
        }
    }, [])
  
  return (
    <View style={styles.pokemon}>
      { pokemonData
      ? <>
        <Pressable style={styles.frame} onPress={() => props.navigation.navigate('PokemonDetail', {pokemon: pokemonData})}>
          <Image style={styles.images} source={{ uri: pokemonData.sprites.front_default }} ></Image>
          <Text style={styles.text}>{props.pokemon.item.name}</Text>
        </Pressable>
      </>
      : null }
    </View>
  );
}