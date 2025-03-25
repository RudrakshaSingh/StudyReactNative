import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg',
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>Hawa Mahal</Text>
              <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            </View>
            <View style={styles.distanceBadge}>
              <Text style={styles.distanceText}>12 mins</Text>
            </View>
          </View>

          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F7',
    paddingVertical: 20,
  },
  headingText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    height: 250,
    width: '100%',
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    color: '#2C3E50',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#7F8C8D',
    fontSize: 16,
  },
  distanceBadge: {
    backgroundColor: '#E7F3FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  distanceText: {
    color: '#2980B9',
    fontWeight: '600',
    fontSize: 14,
  },
  cardDescription: {
    color: '#34495E',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
