import { FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import { getPokemons } from "../providers/ApiPokemon";

const PokemonList = ({navigation}) => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(50);

  useEffect(() => {
    getPokemons(pokemonNumber).then(datas => {
      setPokemons(datas)
    })
  }, [pokemonNumber], 1000)

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  }

  const addPokemons = () => {
    setPokemonNumber(pokemonNumber + 50);
  }
  
  return (
    <FlatList
      onScroll={({nativeEvent}) => isCloseToBottom(nativeEvent) ? addPokemons() : null}
      data={pokemons.results}
      renderItem={pokemon => <Pokemon navigation={navigation} pokemon={pokemon}></Pokemon>}
      keyExtractor={pokemon => pokemon.name}
      numColumns={3}
    />
  );
}

export default PokemonList