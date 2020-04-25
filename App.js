import React from 'react';
import { View, } from 'react-native';

//styles
import { style } from './App.style';

//components
import Home from './Containers/Home';

export default function App() {
  return (
    <View style ={ style.AppWrapper}>
      < Home/>
    </View>
  );
}
