import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Menu from '../../Components/Menu';
import ItemMenu from '../../Components/ItemMenu';
import Input from '../../Components/Input';
import CustomButton from '../../Components/CustomButton';
import ResultPanel from '../../Components/ResultPanel';

type CalcTypeCirculo = {
    type: 'area' | 'perimetro' | 'diametro';
}

const Circulo = () => {
    const [calcType, setCalcType] = useState<CalcTypeCirculo>({ type: 'area' });
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<Number>(0);

    useEffect(() => {
        if (!value) {
            setResult(0);
        }
    }, [value]);

    const onChangeValue = (value: string) => {
        setValue(value);
        console.log(value)
    }

    const calculate = (): void => {
        if (value == "") return;

        switch (calcType.type) {
            case 'area':
                setResult(calcArea());
                break;

            case 'perimetro':
                setResult(calcPerimetro());
                break;
            case 'diametro':
                setResult(calcDiametro());
                break;
        }
    }

    const calcArea = (): number => {
        return Math.pow(parseFloat(value), 2) * Math.PI;
    }

    const calcPerimetro = (): number => {
        return parseFloat(value) * Math.PI * 2;
    }

    const calcDiametro = (): number => {
        return parseFloat(value) * 2;
    }


    const renderResult = (): null | JSX.Element => {
        if (result !== 0) {
            return <ResultPanel result={result.toString()} />
        }
        return null;
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
                    onClick={() => setCalcType({ type: 'area' })}
                    isSelected={calcType.type === 'area'}
                    style={{ width: 120 }}
                />
                <ItemMenu
                    title="Perimêtro"
                    onClick={() => setCalcType({ type: 'perimetro' })}
                    isSelected={calcType.type === 'perimetro'}
                    style={{ width: 120 }}
                />

                <ItemMenu
                    title="Diâmetro"
                    onClick={() => setCalcType({ type: 'diametro' })}
                    isSelected={calcType.type === 'diametro'}
                    style={{ width: 120 }}
                />
            </Menu>
            <Input
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

export default Circulo;