import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from 'react-native-dropdown-picker';

function Add() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateRange, setDateRange] = useState("");
    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");

    const cities = ['New York', 'London', 'Paris', 'Tokyo'];

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
            <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="car" size={24} color="#e91e63" />
                <View style={{ width: 8 }} />
                <Text style={styles.title}>
                    Add a Route
                </Text>
            </View>
            <View style={styles.form}>

                <TouchableOpacity style={styles.input} onPress={showDatePickerModal}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#e91e63" />
                    <Text style={styles.inputText}>
                        <View style={{ width: 5 }} />
                        {dateRange ? dateRange : "Select Date"}
                    </Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display="spinner"
                        onChange={handleDateChange}
                    />
                )}

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

                {/* price */}
                <View style={styles.input}>
                    <MaterialCommunityIcons name="currency-usd" size={24} color="#e91e63" />
                    <Text style={styles.inputText}>
                        <View style={{ width: 5 }} />
                        Price
                    </Text>
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSaveRoute}>
                    <Text style={styles.saveButtonText}>Save </Text>
                    <MaterialCommunityIcons name="map-plus" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
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
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    saveButton: {
        flexDirection: "row",
        height: 50,
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
    },
    form: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 8,
        padding: 8,
        backgroundColor: "#fff",
        width: "100%",
    },
    inputText: {
        color: "#000",
        fontWeight: "bold",
    },
});

export default Add;
