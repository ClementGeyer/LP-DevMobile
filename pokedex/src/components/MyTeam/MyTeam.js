import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { getPokemonByName } from '../../providers/ApiPokemon';
import { retrieveData, storeData, eraseData, getTeam } from '../../utils/Storage';
import { getPokemon } from '../../providers/ApiPokemon';
import Pokemon from '../Pokedex/Pokemon';

const MyTeam = ({navigation}) => {

  const [team, setTeam] = useState(null)
  const [pokemonData, setPokemonData] = useState([])

  const styles = StyleSheet.create({
    images: {
      width: 100,
      height: 100,
      margin: 'auto',
      alignSelf: 'center'
    },
    frame: {
      backgroundColor: 'white',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      justifyContent: 'center'
    },
  });

  useEffect(() => {
    getTeam().then((result) => setTeam(result))
  }, [])

  useEffect(() => {
    if(team && pokemonData.length === 0){
      team.map((pokemon) => {
        getPokemon(pokemon[0]).then((pkmn) => {
          setPokemonData(data => [...data, pkmn])
        })
      })
    }
}, [team])
  
  return (
    <View style={styles.frame}>
      <FlatList
        data={pokemonData}
        renderItem={pokemon => <Pokemon navigation={navigation} pokemon={pokemon} myteam={true}></Pokemon> }
        keyExtractor={pokemon => pokemon.name}
        numColumns={3}
      />
    </View>
  );
}

export default MyTeam