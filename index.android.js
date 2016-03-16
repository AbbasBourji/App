import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

var styles = StyleSheet.create({
});

var MyFirstApp = React.createClass({
  render: function() {
    var layout =
        <View>
            <Text>
            </Text>
        </View>
    ;
	return layout;
  }
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
