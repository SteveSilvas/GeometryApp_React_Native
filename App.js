import { StyleSheet, View } from "react-native";
import Menu from "./src/components/Navigator/Navigator";
import { useState } from "react";
import PageContainer from "./src/interfaces/PageContainer/PageContainer";


export default function App() {
    const [showComponent, setShowComponent] = useState();

    const setShowComponentHandler = (obj) => {
        setShowComponent(obj);
    };

    return (
        <View style={styles.container}>
            <Menu setShowComponent={setShowComponentHandler} />
            <PageContainer showComponent={showComponent}/>
        </View>
    );

   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
});
