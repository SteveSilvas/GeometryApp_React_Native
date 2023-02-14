import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Navigator = (props) => {
    const [showComponent, setShowComponent] = useState({
        showSquare: false,
        showTriangle: false,
    });

    const trianglePressHandler = () => {
        let newState = {
            showSquare: false,
            showTriangle: true,
            showCircle: false,
        }
        setShowComponent(newState);

        props.setShowComponent(newState);
    };

    const squarePressHandler = () => {
        let newState = {
            showSquare: true,
            showTriangle: false,
            showCircle: false,
        }
        setShowComponent(newState);

        props.setShowComponent(newState);
    };

    const circlePressHandler = () => {
        let newState = {
            showSquare: false,
            showTriangle: false,
            showCircle: true,
        }
        setShowComponent(newState);

        props.setShowComponent(newState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.navButton}>
                <Button
                style={styles.navButton}
                    onPress={trianglePressHandler}
                    title="Triângulo"
                ></Button>
            </View>

            <View>
                <Button
                    style={styles.navButton}
                    onPress={squarePressHandler}
                    title="Quadrado"
                ></Button>
            </View>

            <View>
                <Button
                    style={styles.navButton}
                    onPress={circlePressHandler}
                    title="Círculo"
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "10%",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginTop: "6%",
    },
    navButton: {
        color: "black",
        backgroundColor: "orange",
        cursor: "pointer",
    },
});

export default Navigator;
