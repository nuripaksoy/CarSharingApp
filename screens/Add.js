import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Add() {
    const [dateRange, setDateRange] = useState("");
    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");

    const handleSaveRoute = () => {
        // Perform save route logic
        // You can make an API call here to add the route using the input values
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Route</Text>
            <TextInput
                style={styles.input}
                placeholder="Date Range"
                value={dateRange}
                onChangeText={setDateRange}
            />
            <TextInput
                style={styles.input}
                placeholder="Destination"
                value={destination}
                onChangeText={setDestination}
            />
            <TextInput
                style={styles.input}
                placeholder="Starting Point"
                value={startingPoint}
                onChangeText={setStartingPoint}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveRoute}>
                <Text style={styles.saveButtonText}>Save</Text>
                <MaterialCommunityIcons name="map-plus" size={24} color="#fff" />
            </TouchableOpacity>
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
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    saveButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e91e63",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    saveButtonText: {
        fontWeight: "bold",
        color: "#fff",
        marginRight: 8,
    },
});

export default Add;
