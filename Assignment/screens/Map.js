import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from 'expo-location';

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
    <View>
      <Text></Text>
    </View>
  );
}
