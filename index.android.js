import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

var english_german = require('./english_german.json');

var styles = StyleSheet.create({

	// For the container View
    parent: {
        padding: 16
    },

	// For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

	// For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

var MyFirstApp = React.createClass({

  getInitialState: function() {
    return {
        input: '',
        output: ''
    };
  },

  render: function() {
    var layout =
        <View style = { styles.parent } >
            <Text>
              Type something in English:
            </Text>

            <TextInput
                onChangeText={(e) => this.setState({input: e})}
                text = { this.state.input }
                onSubmitEditing = { this.showMeaning }
            />

            <Text style = {styles.germanLabel}>
              Its German equivalent is:
            </Text>

            <Text style = {styles.germanWord}>
              {this.state.output}
            </Text>
        </View>
    ;
	return layout;
  },

    showMeaning: function() {
        var meaning = this.state.input in english_german ?
                        english_german[this.state.input] :
                        "Not Found";

        this.setState({
             output: meaning
        });
    },
});

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
