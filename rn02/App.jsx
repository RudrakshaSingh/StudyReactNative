/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.box1}/><View style={style.box2}/><View style={style.box3}/>

    </SafeAreaView>
  );
};
export default App;
const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#daaaaa', flexDirection: 'column',
     alignItems: 'center',flexWrap: 'row',alignContent: 'center',
  },
  box1:{ backgroundColor: 'red', width: 80, height: 80},
  box2:{width: 80, height: 80, backgroundColor: 'yellow',flexGrow:1,},
  box3:{width: 80, height: 80, backgroundColor: 'green'},

});
