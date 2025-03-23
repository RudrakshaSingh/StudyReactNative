import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <Text>App r</Text>
      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
        }}
      />
      <Button title="Click Me"></Button>

      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 10}}
        onPress={() => Alert.alert('pressed')}>
        <Text>Press me</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{backgroundColor: 'yellow', padding: 10}}
        onPress={() => Alert.alert('pressed')}>
        <Text>Press me</Text>
      </TouchableHighlight>

      <Pressable style={{backgroundColor: 'grey', padding: 10, margin: 10}}>
        <Text>Press me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
