import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


export default class App extends React.Component {
  
  constructor() {
    super();
    this.ws = new WebSocket('ws://10.15.18.168:9001/echo');
   // this._onPressHandler = this._onPressHandler.bind(this);
   this._onPressHandler = ()=>{
    this.ws.send(Math.random().toString());
  }
  }

  componentDidMount() {
    this.ws.onopen = () => {
      // connection opened
      this.ws.send('something'); // send a message
    };
    
    this.ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };
    
    this.ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };
    
    this.ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };


  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={this._onPressHandler} title="Press it"></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
