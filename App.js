import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';


// Homescreen Tabs
class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

// Setting Screen Tabs
class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

//Create Root Tab Component
const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Settings:SettingsScreen,
});

class App extends Component {
  render() {
    return (
      <Tabs />
    )
  }
}

export default App;
