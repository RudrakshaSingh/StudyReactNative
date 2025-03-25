import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  const cards = [
    { id: '1', color: '#EF5354', text: 'Red' },
    { id: '2', color: '#50DBB4', text: 'Blue' },
    { id: '3', color: '#4233ee', text: 'Green' },
    { id: '4', color: '#5DA3FA', text: 'Green' },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        {cards.map((card) => (
          <View
            key={card.id}
            style={[
              styles.card,
              { backgroundColor: card.color },
            ]}
          >
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: 100, // Responsive width (subtracting padding)
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
