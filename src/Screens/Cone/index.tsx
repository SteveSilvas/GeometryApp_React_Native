import { View, Text } from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton';
import Input from '../../Components/Input';
import ItemMenu from '../../Components/ItemMenu';
import Menu from '../../Components/Menu';
import ResultPanel from '../../Components/ResultPanel';

const Cone = () => {
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
        const r = parseFloat(raio);
        const h = parseFloat(altura);
      
        if (isNaN(r) || isNaN(h)) {
          return 0;
        }
      
        const geratriz = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
        const areaBase = Math.PI * Math.pow(r, 2);
        const areaLateral = Math.PI * r * geratriz;
      
        return areaBase + areaLateral;
      }
      

    const calcVolume = (): number => {
        const r = parseFloat(raio);
        const h = parseFloat(altura);
      
        if (isNaN(r) || isNaN(h)) {
          return 0;
        }
      
        return (1/3) * Math.PI * Math.pow(r, 2) * h;
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

export default Cone;