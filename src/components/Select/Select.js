import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Option from "./Option";

const Select = (props) => {
    const [selectable, setSelectable] = useState({
        value: undefined,
        text: props.value | "Selecione",
    });
    const [showDropdown, setShowDropdown] = useState(false);

    const changeSelectedHandler = (selectable) => {
        setSelectable(selectable);
        setShowDropdown(false);
        props.onChange(selectable);
    };

    const renderDropdown = () => {
        if (!props.options) return;

        let optionsElements = [];

        props.options.map((o) => {
            optionsElements.push(
                <Option
                    value={o.value}
                    text={o.text}
                    changeSelected={changeSelectedHandler}
                />
            );
        });
        return showDropdown && optionsElements;
    };

    const pressSelect = () => {
        let stateDropdown = showDropdown;
        setShowDropdown(!stateDropdown);
    };

    return (
        <View style={ selectStyles.box}>
            <TouchableOpacity onPress={() => pressSelect()}>
                <Text style={showDropdown? selectStyles.optionBoxOpened :selectStyles.option}>{selectable.text}</Text>
            </TouchableOpacity>
            {renderDropdown()}
        </View>
    );
};

const selectStyles = StyleSheet.create({
    box: {
        backgroundColor: "#c3c3c3",
        zIndex: 1
        
    },
    option: {
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 12,
        padding:1,
        textAlign: "center"
    },
    optionBoxOpened: {
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 0.5,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        padding:1,
        textAlign: "center"
    },
});

export default Select;
