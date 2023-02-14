import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Input from "../Input/Input";
import Select from "../Select/Select";
import CommonStyles from "../../Utils/Styles/CommonStyles";
const Circle = () => {
    const [typeValueEntry, setTypeValueEntry] = useState();
    const [valueEntry, setValueEntry] = useState(0);
    const [circle, setCircle] = useState({
        area: 0,
        circunferencia: 0,
        diametro: 0,
        raio: 0,
    });

    const [showResult, setShowResult] = useState();

    const entryOnChangeHandler = (e) => {
        setValueEntry(e);
    };

    const onChangeSelectHandler = (selectable) => {
        setTypeValueEntry(selectable.value);
    };

    const calcularComArea = () => {
        let area = valueEntry;
        let raio = Math.sqrt(area/Math.PI);

        let diametro = raio *2;
        let circunferencia = buildCircunferencia(raio);

        setCircle({
            area: area,
            circunferencia: circunferencia,
            diametro: diametro,
            raio: raio,
        });

        setShowResult(true);
    };

    const buildRaioComCircunferencia = (circunferencia)=>{
        return circunferencia / (2 * Math.PI)
    }

    const calcularComCircunferencia = () => {
        let circunferencia = valueEntry;
        let raio = buildRaioComCircunferencia(circunferencia);
        let diametro = raio * 2;
        let area = buildAreaComRaioComRaio(raio);

        setCircle({
            area: area,
            circunferencia: circunferencia,
            diametro: diametro,
            raio: raio,
        });

        setShowResult(true);
    };
    
    const buildAreaComRaio = (raio) => {
        return Math.PI * Math.pow(raio, 2);
    };

    const calcularComDiametro = () => {
        let diametro = valueEntry;
        let raio = valueEntry/2;
        let area = buildAreaComRaio(raio);
        let circunferencia = buildCircunferencia(raio);

        setCircle({
            area: area,
            circunferencia: circunferencia,
            diametro: diametro,
            raio: raio,
        });

        setShowResult(true);
    };

    const buildCircunferencia = (raio) => {
        return 2 * Math.PI * raio;
    };

    const calcularComRaio = () => {
        let raio = valueEntry;
        let area = buildAreaComRaio(raio);
        let circunferencia = buildCircunferencia(raio);
        let diametro = raio * 2;

        setCircle({
            area: area,
            circunferencia: circunferencia,
            diametro: diametro,
            raio: raio,
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
            case "Area":
                calcularComArea();
                break;
            case "Circunferencia":
                calcularComCircunferencia();
                break;
            case "Diametro":
                calcularComDiametro();
                break;
            case "Raio":
                calcularComRaio();
                break;
        }
    };

    const optionsTypesValuesEntry = [
        { text: "Área", value: "Area" },
        { text: "Circunferência", value: "Circunferencia" },
        { text: "Diametro", value: "Diametro" },
        { text: "Raio", value: "Raio" },
    ];

    const renderResult = () => {
        return (
            showResult && (
                <View style={styles.panel}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Área:</Text>
                        <Text>{circle.area}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Circunferência:</Text>
                        <Text>{circle.circunferencia}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Diâmetro:</Text>
                        <Text>{circle.diametro}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Raio:</Text>
                        <Text>{circle.raio}</Text>
                    </View>
                </View>
            )
        );
    };

    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Círculo</Text>
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
                        onChange={entryOnChangeHandler}
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
        marginTop: 20,
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
        borderRadius: 12,
    },

    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#c3c3c3",
        borderBottomWidth: 1,
    },

    label: {
        fontWeight: "bold",
    },
});

export default Circle;
