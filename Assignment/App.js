import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Location from "./screens/Location";
import AddLocation from "./screens/AddLocation";
import Map from "./screens/Map";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Locations"
          component={Location}
          options={{ tabBarIcon: () => <Ionicons name="location-sharp" size={30} color="black" /> }}
        />
        <Tab.Screen
          name="Add Location"
          component={AddLocation}
          options={{ tabBarIcon: () => <Ionicons name="add-circle" size={30} color="black" /> }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{ tabBarIcon: () => <Ionicons name="map" size={30} color="black" /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
