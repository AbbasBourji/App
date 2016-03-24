import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
var Moment = require('moment');
var DayItem = require('./src/day-item.js');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
class MyFirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }

  days() {
    var daysItems = [];
    for(var i=1; i<8; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems
    /* map la length lel array
    return DAYS.map(function(day){
      return <DayItem day={day} />
    });*/
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
