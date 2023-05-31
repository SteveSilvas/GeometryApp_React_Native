import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../../Components/CustomButton';

const Home = ({ navigation }: any) => {

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/GeometryCalc.png')}
            />
            <Text style={styles.text}>
                Uma ferramenta prática e segura para te auxiliar em cálculos básicos
                de trigonometria.
                Com ela é possível realizar diversas contas em um só lugar
                para você não perder tempo reinventando a roda.
            </Text>

            <CustomButton
                title="Clique para Começar"
                onClick={openDrawer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Home;
