import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../components/PokemonDetail";

import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Pokedex(){
    return(
    <Stack.Navigator>
        <Stack.Screen 
          name="PokemonList" 
          component={PokemonList} 
          options={{ title: 'Liste de pokémons' }}
          />
        <Stack.Screen 
          name="PokemonDetail" 
          component={PokemonDetail} 
          options={{ title: 'Detail de pokémons' }}
          />
      </Stack.Navigator>
    )
}

export default function Navigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Pokédex" component={Pokedex} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}