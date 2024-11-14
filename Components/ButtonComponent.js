// ButtonComponent.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonCalculator = ({ label, onPress, buttonStyle, textStyle, customStyle }) => {
    return (
        <TouchableOpacity style={[buttonStyle, customStyle]} onPress={onPress}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};
export default ButtonCalculator;
