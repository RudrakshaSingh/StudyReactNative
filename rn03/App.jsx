import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const dummyData = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Michael Johnson',
    email: 'mjohnson@example.com',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
  },
  {
    name: 'Emily Williams',
    email: 'ewilliams@example.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    name: 'David Brown',
    email: 'dbrown@example.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    name: 'Sarah Miller',
    email: 'smiller@example.com',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
  },
  {
    name: 'Robert Wilson',
    email: 'rwilson@example.com',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop',
  },
  {
    name: 'Jennifer Taylor',
    email: 'jtaylor@example.com',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop',
  },
  {
    name: 'Thomas Anderson',
    email: 'tanderson@example.com',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
  },
  {
    name: 'Lisa Martinez',
    email: 'lmartinez@example.com',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
  },
  {
    name: 'Daniel Thompson',
    email: 'dthompson@example.com',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
  },
  {
    name: 'Jessica Rodriguez',
    email: 'jrodriguez@example.com',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    name: 'Christopher Lee',
    email: 'clee@example.com',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
  },
  {
    name: 'Amanda White',
    email: 'awhite@example.com',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop',
  },
  {
    name: 'Matthew Harris',
    email: 'mharris@example.com',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop',
  },
  {
    name: 'Olivia Clark',
    email: 'oclark@example.com',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=150&h=150&fit=crop',
  },
  {
    name: 'Andrew Lewis',
    email: 'alewis@example.com',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop',
  },
  {
    name: 'Elizabeth Walker',
    email: 'ewalker@example.com',
    image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=150&h=150&fit=crop',
  },
  {
    name: 'Kevin Hall',
    email: 'khall@example.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    name: 'Sophia Young',
    email: 'syoung@example.com',
    image: 'https://images.unsplash.com/photo-1536080776559-441a8702c238?w=150&h=150&fit=crop',
  },
  {
    name: 'Brian Allen',
    email: 'ballen@example.com',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
  },
  {
    name: 'Nicole King',
    email: 'nking@example.com',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.email}
        numColumns={2}
        // horizontal
        columnWrapperStyle={{ justifyContent: 'space-between' }} // ✅ Ensures proper spacing
        contentContainerStyle={{ paddingHorizontal: 10 }} // ✅ Adds padding for spacing
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // ✅ Adds space between rows
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    // flex: 1, // ✅ Makes sure items take up equal space
    width: 150,
    height: 170,
    marginHorizontal: 5, // ✅ Adds space between cards
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
