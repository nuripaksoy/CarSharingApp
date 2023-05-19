import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

function Add() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateRange, setDateRange] = useState("");
    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");

    const handleSaveRoute = () => {
        // Perform save route logic
        // You can make an API call here to add the route using the input values
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        // Format the selected date and set it as the date range value
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString("en-US");
            setDateRange(formattedDate);
        }
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Route</Text>
            <TouchableOpacity style={styles.input} onPress={showDatePickerModal}>
                <Text>{dateRange ? dateRange : "Select Date Range"}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            <TouchableOpacity
                style={styles.input}
                onPress={() => console.log("Open destination modal")}
            >
                <Text>{destination ? destination : "Destination"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.input}
                onPress={() => console.log("Open starting point modal")}
            >
                <Text>{startingPoint ? startingPoint : "Starting Point"}</Text>
            </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "flex-start",
    },
    saveButton: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
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
