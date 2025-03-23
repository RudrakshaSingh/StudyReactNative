# React Native Fundamentals Guide

## Table of Contents
- Setting Up a New React Native Project
  - Project Initialization
  - Development Tips
- Components Overview
  - Understanding Component Types
- Core Components
  1. **View** - Fundamental container component
  2. **SafeAreaView** - Container for safe area boundaries
  3. **Text** - For displaying text content
  4. **Image** - For rendering images
  5. **Button** - Simple platform-specific button
  6. **TouchableOpacity** - Touch handler with opacity feedback
  7. **TouchableHighlight** - Touch handler with highlight effect
  8. **Pressable** - Flexible touch component with state control
- List Components
  9. **ScrollView** - For general scrollable content
  10. **FlatList** - Optimized for large lists with lazy loading
- Component Hierarchy Diagram
- Best Practices for Component Use

## Setting Up a New React Native Project

### Project Initialization
```bash
# Create a new React Native project
npx @react-native-community/cli init rn01

# Start the Metro bundler //dont work now
npx react-native start

# Update Gradle distribution URL (in gradle-wrapper.properties)
distributionUrl=https\://services.gradle.org/distributions/gradle-8.11.1-all.zip

# Stop Gradle daemon
./gradlew --stop

# Clean Gradle cache
rm -rf .gradle
./gradlew clean

# For Android:
npx react-native log-android
# Or, for iOS:
npx react-native log-ios

# Run on Android device/emulator
npx react-native run-android
```

### Development Tips
- Use `rnfes` snippet to quickly create a functional component with styles
- Resize emulator with Ctrl + Up/Down

## Components Overview

### Understanding Component Types
React Native components fall into two main categories:

1. **Core Components**: These are the fundamental building blocks for constructing your UI - the basic "atoms" of your application interface.

2. **List Components**: These are specialized components designed specifically for handling and efficiently displaying collections of data, building on core components for performance optimization.

## Core Components

### 1. View
`<View>` is the most fundamental component for building UI. It's like a `<div>` in web development.

```jsx
<View style={styles.container}>
  {/* Child components go here */}
</View>
```

The View component supports:
- Flexbox layout
- Style customization
- Touch handling
- Accessibility controls
- Nesting of other components

### 2. SafeAreaView
`<SafeAreaView>` is designed to render content within the safe area boundaries of a device, ensuring content isn't hidden by notches, status bars, or other screen features.

```jsx
<SafeAreaView style={styles.container}>
  {/* Content will be displayed safely */}
</SafeAreaView>
```

Key benefits:
- Automatically adjusts to different devices
- Ensures content is visible on all iOS and Android devices
- Particularly important for full-screen applications

### 3. Text
The `<Text>` component is used to display text. All text content must be wrapped in a Text component.

```jsx
<Text style={styles.title}>Hello World</Text>
```

Important characteristics:
- Can be nested with different styles
- Supports text-specific styling (fontWeight, fontSize, etc.)
- Can handle touch events with onPress
- Supports accessibility features

### 4. Image
The `<Image>` component displays images from various sources.

```jsx
// From network
<Image 
  style={{width: 200, height: 200}} 
  source={{uri: "https://example.com/image.jpg"}}
/>

// From local assets
<Image 
  style={{width: 200, height: 200}} 
  source={require('./assets/logo.png')}
/>
```

Key properties:
- `source`: Specifies the image source (URI or local asset)
- `style`: Controls dimensions and appearance
- `resizeMode`: Determines how the image should be resized (cover, contain, stretch, etc.)

### 5. Button
The `<Button>` component provides a simple, platform-specific button.

```jsx
<Button 
  title="Click Me" 
  onPress={() => Alert.alert('Button pressed')} 
  color="#841584" 
/>
```

Limitations:
- Limited customization options
- Fixed appearance based on platform

### 6. TouchableOpacity
`<TouchableOpacity>` creates a wrapper that responds to touch with an opacity effect.

```jsx
<TouchableOpacity
  style={{backgroundColor: 'green', padding: 10}}
  onPress={() => Alert.alert('pressed')}
>
  <Text>Press me</Text>
</TouchableOpacity>
```

Features:
- Highly customizable appearance
- Visual feedback through opacity change when pressed
- Can wrap any component or multiple components

### 7. TouchableHighlight
`<TouchableHighlight>` responds to touch with a highlight effect.

```jsx
<TouchableHighlight
  style={{backgroundColor: 'yellow', padding: 10}}
  underlayColor="#DDDDDD"
  onPress={() => Alert.alert('pressed')}
>
  <Text>Press me</Text>
</TouchableHighlight>
```

Key characteristics:
- Changes to `underlayColor` when pressed
- Designed for interfaces that need obvious press states
- Works well for buttons with backgrounds

### 8. Pressable
`<Pressable>` is the most flexible touch component, giving precise control over touch interactions.

```jsx
<Pressable 
  style={({pressed}) => [
    {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'grey'},
    {padding: 10, margin: 10}
  ]}
  onPress={() => Alert.alert('Pressed!')}
>
  <Text>Press me</Text>
</Pressable>
```

Advantages:
- Added in React Native 0.63
- Most customizable touch handling
- Can define different styles for different states (pressed, hovered, etc.)
- Recommended for new applications

## List Components

### 9. ScrollView
ScrollView renders all its child components at once, regardless of whether they are visible on the screen.

```jsx
<ScrollView style={styles.container}>
  {data.map((item) => (
    <View key={item.id} style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  ))}
</ScrollView>
```

Best used for:
- Small, fixed-length lists
- Content that needs to be fully rendered at once
- When you need to scroll both horizontally and vertically

### 10. FlatList
FlatList renders items lazily, only rendering items that are currently visible on the screen.

```jsx
<FlatList
  data={data}
  renderItem={({item}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  )}
  keyExtractor={item => item.id}
/>
```

Advantages:
- Performance optimized for long lists
- Memory efficient (only renders visible items)
- Built-in support for pull-to-refresh and infinite scrolling
- Header and footer support
- Item separation and section support

### Comparison: FlatList vs ScrollView

| Feature | ScrollView | FlatList |
|---------|------------|----------|
| List Length | Short (< 20 items) | Long (20+ items) |
| Memory Usage | Higher | Lower |
| Rendering | All at once | Lazy (on-demand) |
| Performance | Good for small lists | Excellent for large lists |
| Implementation | Simpler | More options/configuration |
| Bi-directional scrolling | Yes | No (needs configuration) |

