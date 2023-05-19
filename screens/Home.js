import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

function Home() {
  const [routes, setRoutes] = useState([]);
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const mockRoutes = [
    {
      id: 1,
      startingPoint: "New York",
      destination: "London",
      date: "2021-10-01",
      price: 100,
    },
    {
      id: 2,
      startingPoint: "New York",
      destination: "Paris",
      date: "2021-10-02",
      price: 200,
    },
    {
      id: 3,
      startingPoint: "New York",
      destination: "Tokyo",
      date: "2021-10-03",
      price: 300,
    },
    {
      id: 4,
      startingPoint: "London",
      destination: "New York",
      date: "2021-10-04",
      price: 400,
    },
    {
      id: 5,
      startingPoint: "London",
      destination: "Paris",
      date: "2021-10-05",
      price: 500,
    },
  ];
  const cities = ['New York', 'London', 'Paris', 'Tokyo'];


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
          placeholder={
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="map-marker" size={24} color="#e91e63" />
              <Text style={{ color: '#000', fontWeight: 'bold' }}> Destination</Text>
            </View>
          }
          ArrowDownIconComponent={({ style }) => (
            <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="#e91e63" />
          )}
          ArrowUpIconComponent={({ style }) => (
            <MaterialCommunityIcons name="arrow-up-drop-circle-outline" size={24} color="#e91e63" />
          )}
          textStyle={{ color: '#000' }}
          items={cities.map((city) => ({ label: city, value: city }))}
          defaultValue={destination}
          containerStyle={{ height: "auto", marginBottom: 8, borderColor: "black", borderWidth: 2, borderRadius: 8 }}
          style={{ borderWidth: 0 }}
          placeholderStyle={{ color: '#000', fontWeight: 'bold' }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setDestination(item.value)}
        />
        <DropDownPicker
          placeholder={
            <View

              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="map-marker-path" size={24} color="#e91e63" />
              <Text style={{ color: '#000', fontWeight: 'bold' }}> Starting Point</Text>
            </View>
          }
          ArrowDownIconComponent={({ style }) => (
            <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="#e91e63" />
          )}
          ArrowUpIconComponent={({ style }) => (
            <MaterialCommunityIcons name="arrow-up-drop-circle-outline" size={24} color="#e91e63" />
          )}
          textStyle={{ color: '#000' }}
          placeholderStyle={{ color: '#000', fontWeight: 'bold' }}
          items={cities.map((city) => ({ label: city, value: city }))}
          defaultValue={startingPoint}
          containerStyle={{ height: "auto", borderColor: "black", borderWidth: 2, borderRadius: 8 }}
          style={{ borderWidth: 0 }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setStartingPoint(item.value)}
        />
        <View style={{ height: 8 }} />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search </Text>
          <MaterialCommunityIcons name="map-search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        <MaterialCommunityIcons name="routes" size={24} color="#e91e63" />
        Available Routes
      </Text>

      <ScrollView style={{ width: '100%', borderWidth: 2, borderColor: 'black', borderRadius: 8, padding: 8 }}>
        {/* {routes.map((route) => (
          <View key={route.id} style={styles.routeItem}>
            <Text style={styles.routeText}>Starting Point: {route.startingPoint}</Text>
            <Text style={styles.routeText}>Destination: {route.destination}</Text>
          </View>
        ))} */}
        {mockRoutes.map((route) => (
          <TouchableOpacity key={route.id} style={styles.routeItem}>
            <Text style={styles.routeText}>
              <MaterialCommunityIcons name="map-marker" size={20} color="#e91e63" />
              <Text style={{ fontWeight: 'bold' }}> Starting Point:</Text> {route.startingPoint}
            </Text>
            <Text style={styles.routeText}>
              <MaterialCommunityIcons name="map-marker-path" size={20} color="#e91e63" />
              <Text style={{ fontWeight: 'bold' }}> Destination:</Text> {route.destination}
            </Text>
            <Text style={styles.routeText}>
              <MaterialCommunityIcons name="calendar" size={20} color="#e91e63" />
              <Text style={{ fontWeight: 'bold' }}> Date:</Text> {route.date}
            </Text>
            <Text style={styles.routeText}>
              <MaterialCommunityIcons name="currency-usd" size={20} color="#e91e63" />
              <Text style={{ fontWeight: 'bold' }}> Price:</Text> {route.price}
            </Text>
          </TouchableOpacity>
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
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
  },
  routeList: {
    alignItems: "center",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  routeItem: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
    width: "100%",
  },
  routeText: {
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
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
