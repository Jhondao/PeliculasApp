import React from 'react'
import { View, Text, Button } from 'react-native';
import { useEffect } from 'react';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

  useEffect(() => {
    movieDB.get('/now_playing')
        .then( resp => {
          console.log(resp.data);
        })
  }, [])
  


  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
