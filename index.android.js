'use strict';
import React, {
  Component,
  Text,
  View,
  TouchableHighlight, // to able to click in buttons
  AppRegistry,
  StyleSheet
} from 'react-native';
var formatTime = require('minutes-seconds-milliseconds');

var MyFirstApp = React.createClass({
  getInitialState: function(){
    return {
      timeElapsed: null
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>

          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>

          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>

        </View>

        <View style={[styles.footer, this.border('blue')]}>
          <Text>
            I a List of Laps
          </Text>
        </View>

      </View>
    );
  },
  startStopButton: function(){
    return <TouchableHighlight // to make the it clickable
      underlayColor="gray" // To change Color on Click
      onPress={this.handleStartPress} // Handling on click function
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
  },
  lapButton: function(){
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  },
  handleStartPress: function(){
    var startTime = new Date();

    setInterval( () => { // () => function()
      // Use to update the state with new Value
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1, // fit all the screen
    alignItems: 'stretch'
  },
  header:{ // Yellow
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  footer:{ // Blue
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  timerWrapper: { // Red
    flex: 5, // 5/8    // height: 300 not using fix Height we need to use flex
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper:{ // Green
    flex: 3, // 3/8
    flexDirection: 'row', // to make component Horizontal
    justifyContent: 'space-around', // to make the same space between Items and between Right/Left
    alignItems: 'center' // to make the items in Vertical Center
  }
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
