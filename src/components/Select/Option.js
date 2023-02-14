import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Option = (props) => {
    return (
        <TouchableOpacity
            style={optionsStyles.option}
            // onPressIn={console.log("hover")}
            // onPressOut={console.log("deshover")}
            onPress={(e) => {
                props.changeSelected({
                    text: props.text,
                    value: props.value,
                });
            }}
        >
            <Text style={optionsStyles.option}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const optionsStyles = StyleSheet.create({
    option: {
        borderColor: "black",
        borderWidth: 0.5,
        zIndex: 1
    },
    optionHover: {
        backgroundColor: "blue",
    },
});

export default Option;
