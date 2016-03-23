import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';


class DayItem extends Component {
  render() {
    return (
        <Text style={styles.day}>
          A day of the week
        </Text>
    );
  }
};


var styles = StyleSheet.create({
  day:{
    fontSize: 18,
    color: '#000FFF'
  }
});

module.exports = DayItem;
