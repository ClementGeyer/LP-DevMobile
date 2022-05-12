import React, {useState} from 'react';
import reactDom from 'react-dom';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { getPokemonByName } from '../../providers/ApiPokemon';

const SearchPokemons = ({navigation}) => {

    const [text, setText] = useState("");
    const [error, setError] = useState(null);

    function search(){
        getPokemonByName(text).then((datas) => {
          if(datas){
            setError(null);
            navigation.navigate('PokemonDetail', {pokemon: datas})
          } else {
            setError(text);
          }
        })
    }

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white'
        },
        textError: {
          textAlign: 'center',
          color: 'red',
          marginTop: 30
        }
      });
  
  return (
    <View>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Rechercher..."
        />
        <Button title="Find" onPress={() => search()}></Button>
        { error && <Text style={styles.textError}>Aucun pokémon ne s'apelle : {error}</Text> }
    </View>
  );
}

export default SearchPokemons