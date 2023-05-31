import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../Components/CustomButton';
import ItemMenu from '../../Components/ItemMenu';
import Menu from '../../Components/Menu';
import Input from '../../Components/Input';
import ResultPanel from '../../Components/ResultPanel';

const Cilindro = () => {

    const [showArea, setShowArea] = useState<boolean>(true);
    const [raio, setRaio] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [result, setResult] = useState<Number>(0);

    const onChangeRaio = (value: string) => {
        setRaio(value);
    }

    const onChangeAltura = (value: string) => {
        setAltura(value);
    }

    const calculate = (): void => {
        if (raio === "" || altura === "") return;

        if (showArea) {
            setResult(calcArea());
        }
        else {
            setResult(calcVolume());
        }
    }

    const calcArea = (): number => {
        let part = Math.pow(parseFloat(raio), 2) * Math.PI * 2;
        let part2 = 2 * Math.PI * parseFloat(raio) * parseFloat(altura);

        return part + part2;
    }

    const calcVolume = (): number => {
        return Math.PI * Math.pow(parseFloat(raio), 2) * parseFloat(altura);
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
                    title="Volume"
                    onClick={() => setShowArea(false)}
                    isSelected={!showArea}
                    style={{ width: 120 }}
                />
            </Menu>
            <Input
                placeholder="Raio"
                type='numeric'
                value={raio}
                onChange={value => onChangeRaio(value)}
            />

            <Input
                placeholder="Altura"
                type='numeric'
                value={altura}
                onChange={value => onChangeAltura(value)}
            />
            <CustomButton
                title='Calcular'
                onClick={calculate}
            />

            {renderResult()}
        </View>
    )
}

export default Cilindro;