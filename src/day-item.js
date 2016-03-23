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
          {this.props.day}
        </Text>
    );
  }
};

var styles = StyleSheet.create({
  day:{
    fontSize: 18,
    color: '#0000FF'
  }
});

module.exports = DayItem;
