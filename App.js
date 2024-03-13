import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tela from './tela';
import Conversor from './conversor';

function BoasVindas({navigation,route}): JSX.Element {

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
          <Button mode="contained" color = "#032030" 
            onPress={

                ()=> {

                    navigation.navigate('Tela');

                }

            }  
          >
              calculadora

          </Button>   
      </View>


      <View style={styles.conteudo}>
      
          <Button mode="contained" color = "#000000" 
            onPress={

                ()=> {

                    navigation.navigate('Conversor');

                }

            }  
          >
              converter
          </Button>  

      </View>
      
      <View style={styles.rodape}>
        
      </View>

    </View>
  );
}


const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="calculadora" component={BoasVindas}/>
          <Stack.Screen name="Tela" component={Tela}/>
          <Stack.Screen name="Conversor" component={Conversor}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
  
}



const styles = StyleSheet.create({
  container:  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#395886',
  },
  conteudo: {
    flex: 5,
    backgroundColor: '#ffb32b',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-around',

  },
  rodape: {
    flex: 1,
    backgroundColor: '#395886',

  },

});
