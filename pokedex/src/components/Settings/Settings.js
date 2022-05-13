import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, FlatList, Slider, Text } from 'react-native';

const Settings = ({navigation}) => {

  const [team, setTeam] = useState(null)
  const [pokemonData, setPokemonData] = useState([])

  const styles = StyleSheet.create({
    frame: {
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center'
      },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    }
  });

  
  return (
    <View style={styles.frame}>
        <Text style={styles.text}>Son :</Text>
        <Slider></Slider>
    </View>
  );
}

export default Settings