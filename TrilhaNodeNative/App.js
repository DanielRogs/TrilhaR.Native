import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Desafio1 from './src/pages/Desafio1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Desafio1"
        screenOptions={{
          headerShown: false
        }}
      >

          <Stack.Screen name="CarteiraCNH" component={Desafio1} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
