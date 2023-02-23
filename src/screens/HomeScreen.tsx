import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

  const {peliculasEnCine, isLoading} = useMovies();
  const { top } = useSafeAreaInsets();

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: 'center',alignContent:'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    )
  }
  

  return (
    <View style={{marginTop: top + 20}}>
        <MoviePoster 
          movie={peliculasEnCine[4]}
        />
    </View>
  )
}
