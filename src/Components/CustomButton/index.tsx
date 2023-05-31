import { Text, TouchableHighlight } from 'react-native';
import React from 'react';

export interface CustomButtonProps {
    title: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, title }): React.ReactElement => {
    return (
        <TouchableHighlight
            style={{backgroundColor: "#00b000", padding: 10, borderRadius: 15}}
            onPress={onClick}
        >
            <Text style={{fontSize:20, color:"white", textAlign:"center"}}>{title}</Text>
        </TouchableHighlight>
    )
}

export default CustomButton;