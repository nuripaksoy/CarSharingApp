import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";


function Home() {
  const [routes, setRoutes] = useState([]);
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    // Fetch the routes data from the API
    fetchRoutes();
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
        <TextInput
          style={styles.input}
          placeholder="Starting Point"
          value={startingPoint}
          onChangeText={setStartingPoint}
        />
        <TextInput
          style={styles.input}
          placeholder="Destination"
          value={destination}
          onChangeText={setDestination}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
          <MaterialCommunityIcons name="map-search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>


      <Text style={styles.title}>Available Routes</Text>

      <ScrollView contentContainerStyle={styles.routeList}>
        {routes.map((route) => (
          <View key={route.id} style={styles.routeItem}>
            <Text style={styles.routeText}>Starting Point: {route.startingPoint}</Text>
            <Text style={styles.routeText}>Destination: {route.destination}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "column",
    width: "100%",
    height: 150,
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  routeList: {
    flexGrow: 1,
    alignItems: "center",
  },
  routeItem: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    width: "90%",
  },
  routeText: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '98%',
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
