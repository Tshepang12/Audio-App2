import Signup from './components/Signup';
import Login from './components/Login';
import {React,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recording from './components/Recording';






const Stack = createNativeStackNavigator();
 function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="recording" component={ Recording} />
         
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;