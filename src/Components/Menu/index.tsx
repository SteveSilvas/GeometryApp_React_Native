import { View, Text, StyleSheet } from 'react-native';
import React, { Children } from 'react';
import { ItemMenuProps } from '../ItemMenu';

interface MenuProps {
    children: React.ReactElement<ItemMenuProps>[];
}
const Menu: React.FC<MenuProps> = ({ children }) => {
    return (
        <View style={styles.menu}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    menu: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'white'
    },
  });

export default Menu;