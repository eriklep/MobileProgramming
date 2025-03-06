import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Locations' component={Location} options={{ tabBarIcon: () => <Ionicons name="location-sharp" size={30} color="black" />}}/>
        <Tab.Screen name='Add Location' component={AddLocation} options={{ tabBarIcon: () => <Ionicons name="add-circle" size={30} color="black" />}}/>
        <Tab.Screen name='Map' component={Map} options={{ tabBarIcon: () => <Ionicons name="map" size={30} color="black" />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function Location() {
  return (
    <SafeAreaView>

    </SafeAreaView>
  );
}

function AddLocation() {
  return (
    <SafeAreaView>

    </SafeAreaView>
  );
}

function Map() {
  return (
    <SafeAreaView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
