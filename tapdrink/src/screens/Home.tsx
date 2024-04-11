import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = () => {
    navigation.navigate('Resultados');
  };

  return (
    <LinearGradient
      colors={['#141517', '#FFC107']}
      locations={[.5, 8]}
      style={styles.container}
    >
      <View style={styles.imageTextContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Busca y Pide Tu Coctel Favorito
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>
          siente el ritmo, Disfruta El Sabor,{'\n'} Con un solo Toque
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nombre Del Coctel"
          value={textInputValue}
          onChangeText={setTextInputValue}
          style={styles.input}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Filtro" value="opcion1" />
          <Picker.Item label="Opción 2" value="opcion2" />
          <Picker.Item label="Opción 3" value="opcion3" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
  imageTextContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 207,
    height: 63,
    marginBottom: 34
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    marginBottom: 50
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    marginBottom: 41,
    width: '100%'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor:'#D9D9D9'
  },
  pickerContainer: {
    backgroundColor:'#D9D9D9',
    marginBottom: 41,
    width: 174,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  picker: {
    height: 50,
    width: '100%'
  },
  pickerItem: {
    fontSize: 16,
    color: 'black'
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 41,
    width: '100%'
  },
  button: {
    width: 174,
    height: 50,
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  }
};

export default Home;
