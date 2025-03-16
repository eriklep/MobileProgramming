import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { LocationContext } from "./contexts"; 

export default function AddLocation({ navigation }) {
  const { addLocation } = useContext(LocationContext); //Haetaan kontekstista addLocation
  const [name, setName] = useState(""); //Sijainnin nimen useState
  const [description, setDescription] = useState(""); //useState uuden sijainnin kuvaukselle
  const [rating, setRating] = useState(3); //useState arviointiin, oletuksena 3 tähteä


  //Uuden sijainnin lisääminen
  const handleAddLocation = () => {
    if (name.trim() && description.trim()) {
      addLocation(name, description, rating); //Kontekstin funktion kutsuminen 
      navigation.goBack();
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Sijainnin nimi */}
      <Text style={styles.label}>Location Name:</Text>
      <TextInput style={styles.input} placeholder="Enter location name" value={name} onChangeText={setName} />
      
      {/* Sijainnin kuvaus */}
      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} placeholder="Enter location description" value={description} onChangeText={setDescription} />

      {/* Arviointi */}
      <Text style={styles.label}>Rating:</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text key={star} style={[styles.star, rating >= star && styles.selectedStar]} onPress={() => setRating(star)}>
            ★
          </Text>
        ))}
      </View>

      <Button title="Add Location" onPress={handleAddLocation} /> {/* Uuden sijainnin lisääminen */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    color: "#ccc",
    marginHorizontal: 5,
  },
  selectedStar: {
    color: "#f39c12",
  },
});
