import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "./contexts";

export default function Location() {
  const navigation = useNavigation();
  const { locations } = useContext(LocationContext);  

  return (
    <View style={styles.container}>
      <Button title="Add new location" onPress={() => navigation.navigate("Add Location")} />
      
      {locations.length === 0 ? ( 
        <Text style={styles.noLocations}>No locations added yet.</Text>
      ) : (
        <FlatList
          data={locations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>⭐ {item.rating}/5</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  noLocations: { textAlign: "center", marginTop: 20, fontSize: 16, color: "gray" }, 
  item: { backgroundColor: "#f9c2ff", padding: 20, marginVertical: 8, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});
