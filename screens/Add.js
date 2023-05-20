import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import Cities from "../Constants/cities";
import { Slider } from "react-native-elements";

function Add() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [price, setPrice] = useState(0);

    // dropdown items
    const [startingPointOpen, setStartingPointOpen] = useState(false);
    const [startingPointValue, setStartingPointValue] = useState(null);
    const [startingPointItems, setStartingPointItems] = useState(Cities);

    const [destinationOpen, setDestinationOpen] = useState(false);
    const [destinationValue, setDestinationValue] = useState(null);
    const [destinationItems, setDestinationItems] = useState(Cities);

    const cities = ["New York", "London", "Paris", "Tokyo"];

    const handleSaveRoute = () => {
        // Perform save route logic
        // You can make an API call here to add the route using the input values
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setSelectedDate(selectedDate);
            console.log(selectedDate);
        }
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="car" size={24} color="#e91e63" />
                <View style={{ width: 8 }} />
                <Text style={styles.title}>Add a Route</Text>
            </View>
            <View style={styles.form}>
                <TouchableOpacity style={styles.input} onPress={showDatePickerModal}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#e91e63" />
                    <Text style={styles.inputText}>
                        <View style={{ width: 5 }} />
                        {selectedDate ? selectedDate.toLocaleDateString("en-US") : "Select Date"}
                    </Text>
                </TouchableOpacity>


                {showDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}

                    />
                )}

                <DropDownPicker
                    open={startingPointOpen}
                    value={startingPointValue}
                    items={startingPointItems}
                    setOpen={setStartingPointOpen}
                    setValue={setStartingPointValue}
                    setItems={setStartingPointItems}
                    zIndex={1200}
                    style={{
                        borderColor: "black",
                        borderWidth: 2,
                        borderRadius: 8,
                        marginBottom: 8,
                    }}
                    placeholder={
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={24}
                                color="#e91e63"
                            />
                            <Text style={{ fontWeight: "bold" }}> Starting Point</Text>
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
                    style={{
                        borderColor: "black",
                        borderWidth: 2,
                        borderRadius: 8,
                        marginBottom: 8,
                    }}
                    placeholder={
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialCommunityIcons
                                name="map-marker-path"
                                size={24}
                                color="#e91e63"
                            />
                            <Text style={{ fontWeight: "bold" }}> Destination</Text>
                        </View>
                    }
                />

                <View style={{ height: 8 }} />

                {/* price */}
                <View style={styles.input}>
                    <MaterialCommunityIcons
                        name="currency-usd"
                        size={24}
                        color="#e91e63"
                    />
                    <Text style={styles.inputText}>
                        <View style={{ width: 5 }} />
                        Price: ${price.toFixed(2)}
                    </Text>
                </View>

                <Slider
                    value={price}
                    onValueChange={handlePriceChange}
                    minimumValue={0}
                    maximumValue={1000}
                    step={1}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: "#e91e63" }}
                />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveRoute}
                >
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
