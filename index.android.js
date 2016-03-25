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
      timeElapsed: null,
      running : false
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>

        </View>

        <View style={styles.footer}>
          <Text>
            I a List of Laps
          </Text>
        </View>

      </View>
    );
  },
  startStopButton: function(){
    var style = this.state.running ? styles.stopButton : styles.startButton;
    return <TouchableHighlight // to make the it clickable
      underlayColor="gray" // To change Color on Click
      onPress={this.handleStartPress} // Handling on click function
      style={[styles.button, style]}
      >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
  },
  lapButton: function(){
    return <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
  },
  handleStartPress: function(){
    if(this.state.running){ // if the Timer Running ?
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    var startTime = new Date();

    this.interval = setInterval( () => { // () => function()
      // Use to update the state with new Value
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30);
  }/*,  // example this.border('red')
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }*/
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
  },
  timer:{
    fontSize: 60
  },
  button:{
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius : 50, // Circle
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton:{
    borderColor: '#00CC00'
  },
  stopButton:{
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
