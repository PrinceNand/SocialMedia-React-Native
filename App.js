import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';



const App =() => {
  return (
    <SafeAreaView>
      <Text style = {{fontSize:70, fontFamily: getFontFamily(700)}}>Business Tycoon</Text>
      <Title title={"Let's Explore"} />
    </SafeAreaView>
  );
}



export default App;
