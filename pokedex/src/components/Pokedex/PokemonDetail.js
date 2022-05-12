import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Switch } from 'react-native';
import { retrieveData, storeData, eraseData } from '../../utils/Storage';

const PokemonDetail = ({route}) => {

  const pokemonData = route.params.pokemon
  const [isEnabled, setIsEnabled] = useState(false)

  retrieveData(pokemonData.id).then((result) => result === null ? setIsEnabled(false) : setIsEnabled(true))

  function addToTeam() {
    setIsEnabled(!isEnabled)
    if(!isEnabled){
      storeData(pokemonData.id, pokemonData.name)
    } else {
      eraseData(pokemonData.id)
    }
  }

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
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => addToTeam()}
        value={isEnabled}
      />
    </View>
  );
}

export default PokemonDetail