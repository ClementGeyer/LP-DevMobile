import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { getPokemonByName } from '../../providers/ApiPokemon';

const SearchPokemons = ({navigation}) => {

    const [text, setText] = useState("");

    function search(){
        getPokemonByName(text).then((datas) => navigation.navigate('PokemonDetail', {pokemon: datas}))
    }

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white'
        },
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
    </View>
  );
}

export default SearchPokemons