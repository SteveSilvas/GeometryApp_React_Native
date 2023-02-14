import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "../../components/Square/Square";
import Triangle from "../../components/Triangle/Triangle";
import Circle from "../../components/Circle/Circle";

const PageContainer = (props) => {

    const renderSquare = () => {
        if(!props.showComponent) return;
        if(!props.showComponent.showSquare) return;

        return props.showComponent.showSquare ? <Square /> : <></>;
    };

    const renderTriagle = ()=>{
        return props.showComponent.showTriangle &&
        <Triangle/>
    }

    const renderCircle = ()=>{
        return props.showComponent.showCircle && <Circle/>
    }
    
    return <View style={styles.root}>
        {renderSquare()}
        {renderTriagle()}
        {renderCircle()}
        </View>;
};

const styles = StyleSheet.create({
    root:{
        width: '100%',
        height: '100%'
    }
})

export default PageContainer;
