import {
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import React from 'react';

export interface ItemMenuProps {
    title: string;
    onClick: () => void;
    isSelected: boolean;
    style?:object;
}
const ItemMenu: React.FC<ItemMenuProps> = ({
    title,
    onClick,
    isSelected,
    style
}) => {
    return (
        <TouchableOpacity
            style={[style, stylesDefault.item, { borderBottomWidth: 5, borderBottomColor: isSelected ? "#c3c3c3" : "white" }]}
            onPress={onClick}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>{title}</Text>
        </TouchableOpacity>
    )
};

const stylesDefault = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: "white",
    },
});

export default ItemMenu