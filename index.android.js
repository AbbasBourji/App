import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';



class MyFirstApp extends Component {
  render() {
    return (
      <View>
        <Text></Text>
        <Text></Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
