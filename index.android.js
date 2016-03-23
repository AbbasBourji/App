import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

var DayItem = require('./src/day-item.js');

var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
class MyFirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Days of the week</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container:{
    flex: 1,
    //flexDirection: 'row',  // "column/row"
    justifyContent: 'center', //Height "center/flex-end/flex-start"
    alignItems: 'center' //Width "center/flex-end/flex-start"
  }

});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
