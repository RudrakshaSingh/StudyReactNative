import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Thakur Rudraksha Singh',
          status: 'I ❤️ To Code and Study!',
          imageUrl: 'https://media.istockphoto.com/id/1911521695/photo/successful-businessman-in-modern-office-working-on-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fZOZtfcCGenfsaCZQnAljjP-6CI6Vjs9mUT61z4GN4=',
        },
        {
          uid: 2,
          name: 'Ayush Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
        },
        {
          uid: 3,
          name: 'Sanket Mishra',
          status: 'Making your GPay smooth',
          imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.scrollContainer}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
            >
                {contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.userImage}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName} numberOfLines={1}>
                                {name}
                            </Text>
                            <Text style={styles.userStatus} numberOfLines={1}>
                                {status}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    scrollContainer: {
        paddingHorizontal: 16,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2C3E50',
        marginBottom: 4,
    },
    userStatus: {
        fontSize: 14,
        color: '#7F8C8D',
        maxWidth: '90%',
    },
});
