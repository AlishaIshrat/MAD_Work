import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './Components/ButtonComponent';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const HandledNumber = (number) => {
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? number.toString() : prevDisplay + number.toString()
    );
  };

  const HandledOperator = (op) => {
    setPrevValue(display);
    setDisplay('0');
    setOperator(op);
  };

  const HandledEqual = () => {
    try {
      const expression = `${prevValue} ${operator} ${display}`; 
      const result = eval(expression); 
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error!");
    }
  };

  const HandledClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <View style={styling.container}>
      <Text style={styling.display}>{display}</Text>

      <View style={styling.buttonRow}>
        <ButtonComponent label="C" onPress={HandledClear} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="+/-" onPress={() => {}} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="%" onPress={() => HandledOperator('%')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="/" onPress={() => HandledOperator('/')} buttonStyle={styling.button} textStyle={styling.buttonText} />
      </View>

      <View style={styling.buttonRow}>
        <ButtonComponent label="7" onPress={() => HandledNumber('7')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="8" onPress={() => HandledNumber('8')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="9" onPress={() => HandledNumber('9')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="x" onPress={() => HandledOperator('*')} buttonStyle={styling.button} textStyle={styling.buttonText} />
      </View>

      <View style={styling.buttonRow}>
        <ButtonComponent label="4" onPress={() => HandledNumber('4')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="5" onPress={() => HandledNumber('5')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="6" onPress={() => HandledNumber('6')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="-" onPress={() => HandledOperator('-')} buttonStyle={styling.button} textStyle={styling.buttonText} />
      </View>

      <View style={styling.buttonRow}>
        <ButtonComponent label="1" onPress={() => HandledNumber('1')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="2" onPress={() => HandledNumber('2')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="3" onPress={() => HandledNumber('3')} buttonStyle={styling.button} textStyle={styling.buttonText} />
        <ButtonComponent label="+" onPress={() => HandledOperator('+')} buttonStyle={styling.button} textStyle={styling.buttonText} />
      </View>

      <View style={styling.buttonRow}>
        <ButtonComponent label="0" onPress={() => HandledNumber('0')} buttonStyle={[styling.button, styling.wideButton]} textStyle={styling.buttonText} />
        <ButtonComponent label="." onPress={() => HandledNumber('.')} buttonStyle={[styling.button,  styling.wideButton]} textStyle={styling.buttonText} />
        <ButtonComponent label="=" onPress={HandledEqual} buttonStyle={[styling.button,  styling.wideButton]} textStyle={styling.buttonText} />
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    backgroundColor: '#000',
  },
  display: {
    color: '#fff', //#f9f9
    fontSize: 60,
    textAlign: 'right',
    paddingRight: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  wideButton: {
    width: 132,
  }
});
