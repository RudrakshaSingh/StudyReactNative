import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>JavaScript Insights</Text>
            <View style={styles.card}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        What's New in JavaScript 21 - ES12
                    </Text>
                </View>

                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                    style={styles.cardImage}
                    resizeMode="cover"
                />

                <View style={styles.contentContainer}>
                    <Text style={styles.descriptionText} numberOfLines={3}>
                        Just like every year, JavaScript brings in new features. This year JavaScript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy-to-understand examples.
                    </Text>

                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                        >
                            <Text style={styles.actionButtonText}>Read More</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => openWebsite('https://www.instagram.com/rudrakshasingh4577/?hl=en')}
                        >
                            <Text style={styles.actionButtonText}>Follow Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 20,
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        overflow: 'hidden',
    },
    headerContainer: {
        backgroundColor: '#F0F0F0',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    headerText: {
        color: '#333',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    cardImage: {
        height: 220,
        width: '100%',
    },
    contentContainer: {
        padding: 16,
    },
    descriptionText: {
        color: '#666',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 15,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 0.48,
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
});
