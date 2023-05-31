import { TextInput, KeyboardTypeOptions  } from 'react-native';
import React from 'react';

interface InputProps {
    placeholder?: string;
    type?: KeyboardTypeOptions | null;
    value:string | number;
    onChange: (value: string ) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, onChange }) => {

    return (
        <TextInput
            style={{
                borderWidth: 2,
                borderColor: "#c3c3c3",
                borderRadius: 15,
                padding: 10,
                fontSize: 20,
                textAlign: "center"
            }}
            placeholder={placeholder}
            keyboardType={type ?? 'numeric'}
            value={value.toString()}
            onChangeText={text => onChange(text)}
        />
    )
}

export default Input;