'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MyFirstApp = React.createClass({
  render: function() {
    return (
      <View>
        <Text>
          00:00:00
        </Text>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
    );
  },
  startStopButton: function(){
    return <View>
        <Text>
          Start
        </Text>
      </View>
  },
  lapButton: function(){
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
