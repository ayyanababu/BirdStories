
var ReactNative = require('react-native');
var {
  Alert,
} = ReactNative;

class Utils{

  static alertWithoutOptions(title, message){
     this.showAlert(title, message, null, null);
  }

  static alertWithOptions(title, message, buttonToShow, callback){
      this.showAlert(title, message, buttonToShow, callback);
  }

  static showAlert(title, message, buttonsToShow, callback){

    let infoButtonToShow = buttonsToShow? buttonsToShow: null;
    let clickedButtonCallbacks = [];

    if(infoButtonToShow != null && infoButtonToShow.constructor === Array){
      infoButtonToShow.forEach(function (item, index, array) {
          clickedButtonCallbacks.push({text: item, onPress: () => callback(item)})
      });
    }

     Alert.alert(
         title,
         message,
         clickedButtonCallbacks
     );
  }
}

export default Utils
