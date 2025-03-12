import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const sampleLocations = [
  { id: "1", name: "Helsinki", description: "Beautiful capital of Finland", rating: 5 },
  { id: "2", name: "Tampere", description: "City of lakes and culture", rating: 4 },
  { id: "3", name: "Rovaniemi", description: "Santa Claus' hometown", rating: 5 },
];

export default function Location() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Button title="Add new location" onPress={() => navigation.navigate("Add Location")} />
      
      <FlatList
        data={sampleLocations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>⭐ {item.rating}/5</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
