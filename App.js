import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screens/Dashboard';
import Payment from './Screens/Payment';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Dashboard'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Payment' component={Payment} options={{ headerTitle: null, animationEnabled: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerTitle: null, animationEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
