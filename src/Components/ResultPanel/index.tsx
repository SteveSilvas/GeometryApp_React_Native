import { View, Text } from 'react-native'
import React from 'react'

interface ResultPanelProps {
    result: string;
}
const ResultPanel: React.FC<ResultPanelProps> = ({ result }) => {
    return (
        <View style={{ paddingVertical: 15, borderWidth: 2, borderRadius: 15, borderColor: "#c3c3c3" }}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>Resultado: {result}</Text>
        </View>
    )
}

export default ResultPanel;