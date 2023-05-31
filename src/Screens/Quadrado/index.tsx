import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import Menu from '../../Components/Menu';
import ItemMenu from '../../Components/ItemMenu';
import Input from '../../Components/Input';
import CustomButton from '../../Components/CustomButton';
import { stringToDouble } from '../../Utils/Functions/Converters';
import ResultPanel from '../../Components/ResultPanel';

const Quadrado = () => {
    const [showArea, setShowArea] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<Number>(0);

    const onChangeValue = (value: string) => {
        setValue(value);
        console.log(value)
    }

    const calculate = (): void => {
        if (value == "") return;

        if (showArea) {
            setResult(calcArea());
        }
        else {
            setResult(calcPerimetro());
        }
    }

    const calcArea = (): number => {
        return Math.pow(parseFloat(value), 2);
    }

    const calcPerimetro = (): number => {
        return parseFloat(value) * 4;
    }

    const renderResult = (): React.ReactElement => {
        return <ResultPanel result={result.toString()} />
    }

    return (
        <View style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 10,
            padding: 10
        }}>
            <Menu>
                <ItemMenu
                    title="Área"
                    onClick={() => setShowArea(true)}
                    isSelected={showArea}
                    style={{ width: 120 }}
                />
                <ItemMenu
                    title="Perimêtro"
                    onClick={() => setShowArea(false)}
                    isSelected={!showArea}
                    style={{ width: 120 }}
                />
            </Menu>
            <Input
                placeholder="Lado"
                type='numeric'
                value={value}
                onChange={value => onChangeValue(value)}
            />
            <CustomButton
                title='Calcular'
                onClick={calculate}
            />

            {renderResult()}
        </View>
    )
}

export default Quadrado;