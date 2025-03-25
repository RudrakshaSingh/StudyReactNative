import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  const cardData = [
    { id: '1', text: 'Tap', bgColor: '#FF6B6B' },
    { id: '2', text: 'Me', bgColor: '#4ECDC4' },
    { id: '8', text: 'And', bgColor: '#45B7D1' },
    { id: '7', text: 'Drag', bgColor: '#96CEB4' },
    { id: '3', text: 'To', bgColor: '#FFE66D' },
    { id: '4', text: 'Scroll', bgColor: '#6A0572' },
    { id: '5', text: 'More...', bgColor: '#FF9F1C' },
    { id: '6', text: '😀', bgColor: '#2A9D8F' },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {cardData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, styles.cardElevated, { backgroundColor: item.bgColor }]}
            activeOpacity={0.8}
          >
            <Text style={styles.cardText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingBottom: 24, // Added bottom padding for better spacing
    backgroundColor: '#EDEDED', // Softer light gray for wrapper
  },
  headingText: {
    fontSize: 26, // Slightly larger for emphasis
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#222', // Darker for better contrast
    letterSpacing: 0.5, // Subtle letter spacing
  },
  container: {
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingRight: 8, // Extra padding on right to avoid cut-off
  },
  card: {
    width: 110, // Slightly wider cards
    height: 110, // Slightly taller cards
    borderRadius: 35, // Softer, modern corners
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensures shadow doesn't bleed
  },
  cardElevated: {
    elevation: 8, // More pronounced elevation
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },
  cardText: {
    fontSize: 20, // Larger text for readability
    fontWeight: '600', // Bolder text
    color: '#FFFFFF', // White text for contrast with vibrant backgrounds
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Subtle text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
