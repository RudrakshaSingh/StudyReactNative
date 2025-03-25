import { SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content" // Makes status bar content (time, battery) dark
        backgroundColor="#fff"  // Sets status bar background to white (adjust as needed)
      />
      <ScrollView>
        <FlatCard />
        <ElevatedCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
