import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {Header} from 'rea';
import DrawerScreen from './navigation/Drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';


const App: () => Node = () => {
  return (
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <DrawerScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
