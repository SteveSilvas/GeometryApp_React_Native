import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },

    basicButton: {
       backgroundColor: "#c3c3c3"
    },

    confirmButton:{
        backgroundColor: "green",
        borderWidth:3,
        borderColor: "black",

    },

    cancelButton: {
        backgroundColor: "red"
    },
});

export default CommonStyles;