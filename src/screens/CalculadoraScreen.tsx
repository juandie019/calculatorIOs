import React from 'react';
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

  const { numero, numeroAnterior, limpiar, armarNumero, positivoNegativo, btnDelete,  operaciones } = useCalculadora();

  return (
    <View style={ styles.container }>
      {
        ( numeroAnterior !== '0' ) && (
          <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
        )
      }

      <Text
        style={ styles.resultado }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { numero }
      </Text>

      {/* Fila de botones */}
      <View style={ styles.fila }>
          <BotonCalc texto="C" color="#9B9B9B" accion={ limpiar } />
          <BotonCalc texto="+/-" color="#9B9B9B" accion={ positivoNegativo }/>
          <BotonCalc texto="del" color="#9B9B9B" accion={ btnDelete }/>
          <BotonCalc texto="/" color="#FF9427" accion={ operaciones.btnDividr }/>
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila }>
          <BotonCalc texto="7" accion={ armarNumero }/>
          <BotonCalc texto="8" accion={ armarNumero }/>
          <BotonCalc texto="9" accion={ armarNumero }/>
          <BotonCalc texto="x" color="#FF9427" accion={ operaciones.btnMultiplicar }/>
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila }>
          <BotonCalc texto="4" accion={ armarNumero } />
          <BotonCalc texto="5" accion={ armarNumero } />
          <BotonCalc texto="6" accion={ armarNumero } />
          <BotonCalc texto="-" color="#FF9427" accion={ operaciones.btnRestar } />
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila }>
          <BotonCalc texto="1" accion={ armarNumero } />
          <BotonCalc texto="2" accion={ armarNumero } />
          <BotonCalc texto="3" accion={ armarNumero } />
          <BotonCalc texto="+" color="#FF9427" accion={ operaciones.btnSumar }/>
      </View>

      {/* Fila de botones */}
      <View style={ styles.fila }>
          <BotonCalc texto="0" accion={ armarNumero } ancho/>
          <BotonCalc texto="." accion={ armarNumero } />
          <BotonCalc texto="=" color="#FF9427" accion={ operaciones.calcular }/>
      </View>
    </View>
  );
};
