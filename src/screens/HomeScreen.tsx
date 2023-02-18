import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const {peliculasEnCine, isLoading} = useMovies();

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: 'center',alignContent:'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    )
  }
  

  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
