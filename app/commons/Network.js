
import {
  NetInfo
} from 'react-native';

class NetworkApi {
  constructor() {
  }

static defaultHeaders  = {
    'Accept': 'applicatoin/json',
    'Content-Type': 'application/json',
  }

  static getWithOutParams(route, headers, callback){
    return this.xhr(route, null, 'GET', headers, callback);
  }

  static getWithParams(route, params, headers, callback){
    return this.xhr(route, params, 'GET', headers, callback);
  }

  static put(route, params, headers, callback){
    return this.xhr(route, params, 'PUT', headers, callback);
  }

  static post(route, params, headers, callback){
    return this.xhr(route, params, 'POST', headers, callback);
  }

  static delete(route, params, headers, callback){
    return this.xhr(route, params, 'DELETE', headers, callback);
  }

  /*
    * This method will take URL path as string for "routeurl"
    * params will take body: {key: value}, note: not stringify
    * Header:  {key: value}, note: not stringify
    * callback will give us two params (error, responseJson) so check for error not equal to null then process json
      else throw alert in your UI by using error parameter.
  */
  static xhr(routeurl , params, methodType, headers, callback){
    let options = Object.assign({ method: methodType }, params? { body: JSON.stringify(params) } : null);
    options.headers = headers? headers: NetworkApi.defaultHeaders;

    fetch(routeurl, options).then(resp => {
       let responsejson;
       if(resp.ok){
          return responsejson = resp.json();
       }else{
          responsejson.then( err => { callback(resp.statusText, null) });
       }
    }).then((returnedValidResponse) => {
        callback(null, returnedValidResponse);
    }).catch(error => callback(error.message, null))
  }

/*
  To check the is wifi or any network carrier available for network calls.
*/
static isConnectionReachable(callback){
    NetInfo.fetch().done((reach) => {
      if (reach == 'NONE') {
        callback("false")
      } else {
        callback("true")
      }
    });
  }
}

export default NetworkApi
