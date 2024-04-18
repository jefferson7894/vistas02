import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    
  });

  const handlePresionarBoton = (opcion) => {
    console.log('Opción seleccionada:', opcion);
    // Aquí puedes definir la navegación para cada botón
    // Por ejemplo, navigation.navigate('YourScreenName');
  };

  if (!fontsLoaded) {
    return null; // Muestra un spinner u otra carga de pantalla mientras se cargan las fuentes
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* Utiliza el ícono de menú en lugar de la imagen */}
        <TouchableOpacity style={styles.iconoMenu}>
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
        {/* Aquí se coloca el texto "¿Qué deseas hacer?" más pequeño */}
        <Text style={styles.subtitulo}>¿Qué deseas hacer?</Text>
        {/* Aquí se coloca la casita a la derecha y un poco más abajo */}
        <TouchableOpacity style={styles.iconoCasa}>
          <MaterialIcons name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* El resto del contenido permanece igual */}
      <View style={styles.filasContainer}>
        <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={() => handlePresionarBoton('Sigue tu envío')}>
            <Image source={require('./imagenes/logo-ubicacion.png')} style={styles.imagenBoton} />
            <Text style={styles.textoBoton}>Sigue tu envío</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => handlePresionarBoton('Registra tu envío')}>
            <Image source={require('./imagenes/registrar.png')} style={styles.imagenBoton} />
            <Text style={styles.textoBoton}>Registra tu envío</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={() => handlePresionarBoton('Cotiza tu envío')}>
            <Image source={require('./imagenes/cotiza.png')} style={styles.imagenBoton} />
            <Text style={styles.textoBoton}>Cotiza tu envío</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => handlePresionarBoton('Contáctanos')}>
            <Image source={require('./imagenes/contactanos.png')} style={styles.imagenBoton} />
            <Text style={styles.textoBoton}>Contáctanos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.zonaClientesContainer}>
          <TouchableOpacity style={[styles.boton, styles.zonaClientesBoton]} onPress={() => handlePresionarBoton('Zona Clientes')}>
            <Image source={require('./imagenes/zona-clientes.png')} style={styles.imagenBoton} />
            <Text style={styles.textoBoton}>Zona Clientes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20, 
    fontFamily: 'Congenial-Black', // Cambia aquí al nombre de la fuente cargada
    marginLeft: 15,
  },
  filasContainer: {
    alignItems: 'center',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  zonaClientesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '50%',
    marginBottom: 0,
  },
  
  boton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 35,
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 9,
   
  },
  textoBoton: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  zonaClientesBoton: {
    width: 150,
    height: 150,
  },
  iconoMenu: {
    marginLeft: 10,
  },
  iconoCasa: {
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 'auto', 
  },
  imagenBoton: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});
