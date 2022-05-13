import React, { useState, useEffect } from "react";
import PokemonList from "../components/Pokedex/PokemonList";
import PokemonDetail from "../components/Pokedex/PokemonDetail";
import SearchPokemons from "../components/SearchPokemons/SearchPokemons";
import MyTeam from "../components/MyTeam/MyTeam";
import Settings from '../components/Settings/Settings'

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

function Search(){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="SearchPokemons" 
          component={SearchPokemons} 
          options={{ title: 'Recherche de pokémons' }}
          />
      </Stack.Navigator>
    )
}


function Team(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="MyTeam" 
        component={MyTeam} 
        options={{ title: 'Mon équipe' }}
        />
    </Stack.Navigator>
  )
}

function Options(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{ title: 'Paramètres' }}
        />
    </Stack.Navigator>
  )
}

export default function Navigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Pokédex" component={Pokedex} options={{ headerShown: false }} />
          <Tab.Screen name="Recherche" component={Search} options={{ headerShown: false }} />
          <Tab.Screen name="Mon Équipe" component={Team} options={{ headerShown: false }} />
          <Tab.Screen name="Paramètres" component={Options} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}