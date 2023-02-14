import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {

    const onChangeText = (text) => {
        console.log(text);
        props.onChange(text);
    }

    return (
        <TextInput
            numberOfLines={props.numberOfLines}
            maxLength={props.maxLength}
            onChangeText={(text) => onChangeText(text)}
            keyboardType={props.type}
            value={props.value}
            style={inputStyles.inputBasic}
        ></TextInput>
    );
};

const inputStyles = StyleSheet.create({
    inputBasic:{
       backgroundColor: "#c3c3c3",
       borderRadius: 12,
       borderBottomWidth: 2,
       borderBottomColor: "black"
    }
});

export default Input;
