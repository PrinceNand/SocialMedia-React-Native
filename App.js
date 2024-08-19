import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';



const App =() => {
  return (
    <SafeAreaView>
      <Text style = {{fontSize:70, fontFamily: getFontFamily(700)}}>Business Tycoon</Text>
    </SafeAreaView>
  );
}



export default App;
