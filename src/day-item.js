import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

/* {this.props.day} bidta3mela la el2at el variable mn file la gheyr file     */
class DayItem extends Component {
  render() {
    return (
        <Text style={this.style()}>
          {this.props.day}
        </Text>
    );
  }
  style(){
    return {
      color: this.color(),
      //fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight(),
    }
  }
  color(){

    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, '+ opacity + ')';
    // rgba(0, 0, 0, .3)
  }
  fontWeight(){
    var weight = 7 - this.props.daysUntil;
    return weight * 100;
  }
  fontSize(){
    return 60 - 6 * this.props.daysUntil;
  }
  lineHeight(){
    return 70 - 4 * this.props.daysUntil;
  }
};

/*var styles = StyleSheet.create({
  day:{
    fontSize: 18,
    color: '#0000FF'
  }
});*/

// lezim ektoub heyda el sater ka2eno return lel file
module.exports = DayItem;
