import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto: String,
    color?: String,
    ancho?: boolean,
		accion: ( numeroTexto: string ) => void,
}
const mainColorButton = '#2D2D2D';

export const BotonCalc = ({ texto, color = mainColorButton, ancho = false, accion } : Props) => {
  return (
    <TouchableOpacity
			onPress={ () => accion( texto ) }
		>
        <View style={{
            ...styles.boton,
            backgroundColor: color,
            width: ( ancho ) ? 180 : 80,
        }}>
            <Text style={{
                ...styles.botonTexto,
                color: ( color === '#9B9B9B' ) ? 'black' : 'white',
            }}> { texto } </Text>
        </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: mainColorButton,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
        color: 'white',
    },
});
