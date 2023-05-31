import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Menu from '../../Components/Menu';
import ItemMenu from '../../Components/ItemMenu';
import Input from '../../Components/Input';
import CustomButton from '../../Components/CustomButton';
import ResultPanel from '../../Components/ResultPanel';

type CalcTypeTriangulo = {
    type: 'area' | 'perimetro' | 'altura';
}

const Triangulo = () => {
    const [calcType, setCalcType] = useState<CalcTypeTriangulo>({ type: 'area' });
    const [base, setBase] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [ladoA, setLadoA] = useState<string>("");
    const [ladoB, setLadoB] = useState<string>("");
    const [ladoC, setLadoC] = useState<string>("");
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        if (!base || !altura || !ladoA || !ladoB || !ladoC) {
            setResult(0);
        }
    }, [base, altura, ladoA, ladoB, ladoC]);

    const onChangeBase = (value: string) => {
        setBase(value.replace(',', '.'));
    }

    const onChangeAltura = (value: string) => {
        setAltura(value.replace(',', '.'));
    }

    const onChangeLadoA = (value: string) => {
        setLadoA(value.replace(',', '.'));
    }

    const onChangeLadoB = (value: string) => {
        setLadoB(value.replace(',', '.'));
    }

    const onChangeLadoC = (value: string) => {
        setLadoC(value.replace(',', '.'));
    }

    const calculate = (): void => {
        if (calcType.type === 'area') {
            setResult(calcArea());
        } else if (calcType.type === 'perimetro') {
            setResult(calcPerimetro());
        } else if (calcType.type === 'altura') {
            setResult(calcAltura());
        }
    }

    const calcArea = (): number => {
        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (isNaN(b) || isNaN(h)) {
            return 0;
        }

        return (b * h) / 2;
    }

    const calcPerimetro = (): number => {
        const a = parseFloat(ladoA);
        const b = parseFloat(ladoB);
        const c = parseFloat(ladoC);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return 0;
        }

        return a + b + c;
    }

    const calcAltura = (): number => {
        const b = parseFloat(base);
        const a = parseFloat(ladoA);

        if (isNaN(b) || isNaN(a)) {
            return 0;
        }

        return (2 * calcArea()) / b;
    }

    const renderResult = (): JSX.Element | null => {
        if (result !== 0) {
            return <ResultPanel result={result.toString()} />;
        }
        return null;
    }

    const renderAreaCalcInputs = (): JSX.Element | null => {
        if (calcType.type === 'area') {
            return (
                <>
                    <Input
                        placeholder="Base"
                        type="numeric"
                        value={base}
                        onChange={value => onChangeBase(value)}
                    />
                    <Input
                        placeholder="Altura"
                        type="numeric"
                        value={altura}
                        onChange={value => onChangeAltura(value)}
                    />
                </>
            )
        }
        return null;
    }

    const renderPerimetroCalcInputs = (): JSX.Element | null => {
        if (calcType.type === 'perimetro') {
            return (
                <>
                    <Input
                        placeholder="Lado A"
                        type="numeric"
                        value={ladoA}
                        onChange={value => onChangeLadoA(value)}
                    />
                    <Input
                        placeholder="Lado B"
                        type="numeric"
                        value={ladoB}
                        onChange={value => onChangeLadoB(value)}
                    />
                    <Input
                        placeholder="Lado C"
                        type="numeric"
                        value={ladoC}
                        onChange={value => onChangeLadoC(value)}
                    />
                </>
            )
        }
        return null;
    }

    const renderAlturaCalcInputs = (): JSX.Element | null => {
        if (calcType.type === 'altura') {
            return (
                <>
                    <Input
                        placeholder="Base"
                        type="numeric"
                        value={base}
                        onChange={value => onChangeBase(value)}
                    />
                    <Input
                        placeholder="Lado A"
                        type="numeric"
                        value={ladoA}
                        onChange={value => onChangeLadoA(value)}
                    />
                </>
            )
        }
        return null;
    }

    return (
        <View
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 10,
                padding: 10,
            }}
        >
            <Menu>
                <ItemMenu
                    title="Área"
                    onClick={() => setCalcType({ type: 'area' })}
                    isSelected={calcType.type === 'area'}
                    style={{ width: 120 }}
                />
                <ItemMenu
                    title="Perímetro"
                    onClick={() => setCalcType({ type: 'perimetro' })}
                    isSelected={calcType.type === 'perimetro'}
                    style={{ width: 120 }}
                />
                <ItemMenu
                    title="Altura"
                    onClick={() => setCalcType({ type: 'altura' })}
                    isSelected={calcType.type === 'altura'}
                    style={{ width: 120 }}
                />
            </Menu>
            {renderAreaCalcInputs()}
            {renderPerimetroCalcInputs()}
            {renderAlturaCalcInputs()}
            <CustomButton title="Calcular" onClick={calculate} />
            {renderResult()}
        </View>
    );
}


export default Triangulo;