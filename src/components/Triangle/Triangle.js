import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Input from "../Input/Input";
import Select from "../Select/Select";
import CommonStyles from "../../Utils/Styles/CommonStyles";

const Triangle = () => {
    const [triangle, setTriangle] = useState({
        height: 0,
        base: 0,
        area: 0,
        perimetro: 0
    });
    const [showResult, setShowResult] = useState();

    const heightOnChangeHandler = (value) => {
        setTriangle((prevState)=>{
            return {...prevState, height: value}
        });
    };

    const baseOnChangeHandler = (value) => {
        setTriangle((prevState)=>{
            return {...prevState, base: value}
        });
    };

    const refresh = () => {
        setTriangle({
            largura: "",
            altura: "",
            area: "",
            perimetro: "",
        });

        setShowResult(true);
    };

    const buildArea = ()=>{
        let area = (triangle.base * triangle.height)/2;
        setTriangle((prevState)=>{
            return {...prevState, area: area}
        })
        setShowResult(true);
    }

    const calculate = () => {
       buildArea()
    };

    const renderResult = () => {
        return (
            showResult && (
                <View style={styles.panel}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Altura:</Text>
                        <Text>{triangle.altura}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Base:</Text>
                        <Text>{triangle.base}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Área:</Text>
                        <Text>{triangle.area}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Perímetro:</Text>
                        <Text>
                            {triangle.perimetro}
                        </Text>
                    </View>
                </View>
            )
        );
    };

    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Triângulo</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.rowForm}>
                    <Text>Altura:</Text>
                    <Input
                        type="numeric"
                        onChange={heightOnChangeHandler}
                    ></Input>
                </View>
                <View style={styles.rowForm}>
                    <Text>Base:</Text>
                    <Input
                        type="numeric"
                        onChange={baseOnChangeHandler}
                    ></Input>
                </View>
                <View style={CommonStyles.footer}>
                    <Button
                        style={CommonStyles.cancelButton}
                        onPress={refresh}
                        title="Limpar"
                    ></Button>
                    <Button
                        style={CommonStyles.confirmButton}
                        onPress={calculate}
                        title="Calcular"
                    ></Button>
                </View>
            </View>
            {renderResult()}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
    },

    form: {
        marginTop: 10,
        width: "90%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 12,
        padding: 4,
    },

    rowForm: {
        marginTop:20
    },

    titleContainer: {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
    },

    panel: {
        marginTop: 10,
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius:12
    },

    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#c3c3c3",
        borderBottomWidth: 1
    },

    label: {
        fontWeight: "bold",
    },

});

export default Triangle;
