import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Input from "../Input/Input";
import Select from "../Select/Select";
import CommonStyles from "../../Utils/Styles/CommonStyles";
const Square = () => {
    const [typeValueEntry, setTypeValueEntry] = useState();
    const [valueEntry, setValueEntry] = useState(0);
    const [square, setSquare] = useState();
    const [showResult, setShowResult] = useState();

    const heightOnChangeHandler = (e) => {
        setValueEntry(e);
    };

    const onChangeSelectHandler = (selectable) => {
        setTypeValueEntry(selectable.value);
    };

    const calcularComLado = () => {
        let area = Math.pow(valueEntry, 2);
        let perimetro = valueEntry * 4;

        setSquare({
            largura: valueEntry,
            altura: valueEntry,
            area: area,
            perimetro: perimetro,
        });

        setShowResult(true);
    };

    const calcularComPerimetro = () => {
        let lado = valueEntry / 4;
        let area = Math.pow(lado, 2);

        setSquare({
            largura: lado,
            altura: lado,
            area: area,
            perimetro: valueEntry,
        });

        setShowResult(true);
    };

    const calcularComArea = () => {
        let lado = Math.sqrt(valueEntry);
        let perimetro = lado * 4;

        setSquare({
            largura: lado,
            altura: lado,
            area: valueEntry,
            perimetro: perimetro,
        });

        setShowResult(true);
    };

    const refresh = () => {
        setSquare({
            largura: "",
            altura: "",
            area: "",
            perimetro: "",
        });

        setShowResult(true);
    };

    const calculate = () => {
        console.log(typeValueEntry);
        switch (typeValueEntry) {
            case "Altura":
                calcularComLado();
                break;
            case "Lado":
                calcularComLado();
                break;
            case "Perimetro":
                calcularComPerimetro();
                break;
            case "Area":
                calcularComArea();
                break;
        }
    };

    const optionsTypesValuesEntry = [
        { text: "Altura", value: "Altura" },
        { text: "Lado", value: "Lado" },
        { text: "Perímetro", value: "Perimetro" },
        { text: "Área", value: "Area" },
    ];

    const renderResult = () => {
        return (
            showResult && (
                <View style={styles.panel}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Altura:</Text>
                        <Text>{square.altura}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Largura:</Text>
                        <Text>{square.largura}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Área:</Text>
                        <Text>{square.area}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Perímetro:</Text>
                        <Text>
                            {square.perimetro}
                        </Text>
                    </View>
                </View>
            )
        );
    };

    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Quadrado</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.rowForm}>
                    <Text>Que tipo de valor você possui?</Text>
                    <Select
                        onChange={onChangeSelectHandler}
                        options={optionsTypesValuesEntry}
                    ></Select>
                </View>
                <View style={styles.rowForm}>
                    <Text>Entre com o valor de {typeValueEntry}</Text>
                    <Input
                        type="numeric"
                        onChange={heightOnChangeHandler}
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

export default Square;
