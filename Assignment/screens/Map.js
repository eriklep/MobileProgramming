import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from 'expo-location';
import MapView from 'react-native-maps'
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";


export default function Map() {

    const [loc, setLoc] = useState({lat: 65.0800, lon: 25.4800}); 
    const [place, setPlace] = useState('');

  useEffect(()=>{ //Haetaan käyttäjän sijaintia sovelluksen käynnistyessä
    getLocation();
    async function getLocation(){
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        console.log('Geolocation failed.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest})
      setLoc({lat: location.coords.latitude, lon: location.coords.longitude});
    }
  }, []);


  // Sijainnin haku ja sen näyttäminen
  async function search(){
    let coords = await Location.geocodeAsync(place);
    if(coords[0]){
      setLoc({lat: coords[0].latitude, lon: coords[0].longitude})
  }else{
    Alert.alert('Location not found!')
  }

  }

  // Syöte sijainnin hakuun
  return ( 
    <View style={styles.container}> 
      <TextInput value={place} onChangeText={setPlace}/> 
      <Button onPress={search}>Search</Button>
      <MapView
      style={styles.map}
      region={{
        latitude: loc?.lat,
        longitude: loc?.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map:{
    flex: 1
  }
});