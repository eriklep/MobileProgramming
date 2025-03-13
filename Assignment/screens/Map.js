import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from 'expo-location';
import MapView from 'react-native-maps'

export default function Map() {

    const [loc, setLoc] = useState(); 


  useEffect(()=>{
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

  console.log('*** ' + loc?.lat);

  return (
    <View style={styles.container}>
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
})