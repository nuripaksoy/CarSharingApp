import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import Shadow from '../styles/Shadow';
import cities from "../Constants/cities";
import mockRoutes from "../Constants/mockRoutes";

function Home() {
  const [routes, setRoutes] = useState([]);

  // dropdown items
  const [startingPointOpen, setStartingPointOpen] = useState(false);
  const [startingPointValue, setStartingPointValue] = useState(null);
  const [startingPointItems, setStartingPointItems] = useState(cities);

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [destinationValue, setDestinationValue] = useState(null);
  const [destinationItems, setDestinationItems] = useState(cities);

  useEffect(() => {
    // Fetch the routes data from the API
    // fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      // Make an API call to fetch the routes data
      const response = await fetch("YOUR_API_ENDPOINT");
      const data = await response.json();

      // Update the routes state with the fetched data
      setRoutes(data);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  const handleSearch = () => {
    // Perform search logic based on startingPoint and destination
    // You can modify this function to send the search parameters to your API

    // Example: Filtering routes based on startingPoint and destination
    const filteredRoutes = routes.filter(
      (route) =>
        route.startingPoint.toLowerCase() === startingPoint.toLowerCase() &&
        route.destination.toLowerCase() === destination.toLowerCase()
    );

    setRoutes(filteredRoutes);
  };

  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <DropDownPicker
          open={startingPointOpen}
          value={startingPointValue}
          items={startingPointItems}
          setOpen={setStartingPointOpen}
          setValue={setStartingPointValue}
          setItems={setStartingPointItems}
          zIndex={1200}
          style={{ ...Shadow.shadow, borderWidth: 0, borderRadius: 8, marginBottom: 8 }}
          placeholder={
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="map-marker" size={24} color="#bb5050" />
              <Text style={{ fontWeight: 'bold' }}> Starting Point</Text>
            </View>
          }
        />
        <DropDownPicker
          open={destinationOpen}
          value={destinationValue}
          items={destinationItems}
          setOpen={setDestinationOpen}
          setValue={setDestinationValue}
          setItems={setDestinationItems}
          zIndex={1100}
          style={{ ...Shadow.shadow, borderWidth: 0, borderRadius: 8, marginBottom: 8 }}
          placeholder={
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="map-marker-path" size={24} color="#bb5050" />
              <Text style={{ fontWeight: 'bold' }}> Destination</Text>
            </View>
          }
        />

        <View style={{ height: 8 }} />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search </Text>
          <MaterialCommunityIcons name="map-search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        <MaterialCommunityIcons name="routes" size={24} color="#bb5050" />
        Available Routes
      </Text>

      <View style={styles.routeList}>
        <ScrollView style={styles.scrollViewContent}>
          {/* {routes.map((route) => (
          <View key={route.id} style={styles.routeItem}>
            <Text style={styles.routeText}>Starting Point: {route.startingPoint}</Text>
            <Text style={styles.routeText}>Destination: {route.destination}</Text>
          </View>
        ))} */}
          {mockRoutes.map((route) => (
            <TouchableOpacity key={route.id} style={styles.routeItem}>
              <Text style={styles.routeText}>
                <MaterialCommunityIcons name="map-marker" size={20} color="#bb5050" />
                <Text style={{ fontWeight: 'bold' }}> Starting Point:</Text> {route.startingPoint}
              </Text>
              <Text style={styles.routeText}>
                <MaterialCommunityIcons name="map-marker-path" size={20} color="#bb5050" />
                <Text style={{ fontWeight: 'bold' }}> Destination:</Text> {route.destination}
              </Text>
              <Text style={styles.routeText}>
                <MaterialCommunityIcons name="calendar" size={20} color="#bb5050" />
                <Text style={{ fontWeight: 'bold' }}> Date:</Text> {route.date}
              </Text>
              <Text style={styles.routeText}>
                <MaterialCommunityIcons name="currency-usd" size={20} color="#bb5050" />
                <Text style={{ fontWeight: 'bold' }}> Price:</Text> {route.price}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    gap: 8,
    marginBottom: 20,
    ...Shadow.shadow,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    zIndex: 1000,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  routeList: {
    flex: 1,
    width: "100%",
    ...Shadow.shadow,
    borderRadius: 8,
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 8,
  },
  routeItem: {
    backgroundColor: "white",
    ...Shadow.shadow,
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
    alignSelf: "center",
    width: "95%",
  },
  routeText: {
    marginBottom: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: '#bb5050',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
