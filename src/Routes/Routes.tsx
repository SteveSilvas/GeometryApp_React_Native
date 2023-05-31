
import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Circulo from '../Screens/Circulo';
import Cilindro from '../Screens/Cilindro';
import Quadrado from '../Screens/Quadrado';
import Triangulo from '../Screens/Triangulo';
import Cone from '../Screens/Cone';

const Routes = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Cilindro" component={Cilindro} />
                <Drawer.Screen name="Circulo" component={Circulo} />
                <Drawer.Screen name="Cone" component={Cone} />
                <Drawer.Screen name="Quadrado" component={Quadrado} />
                <Drawer.Screen name="Triângulo" component={Triangulo} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes