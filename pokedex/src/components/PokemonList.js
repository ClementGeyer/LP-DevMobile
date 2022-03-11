import { FlatList, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import { getPokemons } from "../providers/ApiPokemon";

const PokemonList = ({navigation}) => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(15);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if(load){
      getPokemons(pokemonNumber).then(datas => {
        setPokemons(datas)
        setLoad(false)
      })
    }
  }, [pokemonNumber])

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  }

  const addPokemons = () => {
    setLoad(true)
    setPokemonNumber(pokemonNumber + 20);
  }
  
  return (
    <>
      <Image source={require('../../assets/loader.svg')} ></Image>
      <FlatList
        onScroll={({nativeEvent}) => isCloseToBottom(nativeEvent) ? addPokemons() : null}
        data={pokemons.results}
        renderItem={pokemon => <Pokemon navigation={navigation} pokemon={pokemon}></Pokemon>}
        keyExtractor={pokemon => pokemon.name}
        numColumns={3}
      />
      
    </>
  );
}

export default PokemonList