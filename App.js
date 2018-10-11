import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modaly from './app/Modaly'
export default class App extends Component<Props> {

  constructor(props){
    super(props)

    this.state = {
      isVisible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modaly isVisible={this.state.isVisible}>

          <Text
            style={{marginBottom: 10, alignItems: 'center'}}
            > Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#333333',
              borderRadius: 3,
              borderWidth: 1,
              width: "100%",
              padding: 10,
              alignItems: 'center',
            }}
            >
            <Text style={{color: "#fff"}}>This is Button !</Text>
          </TouchableOpacity>
        </Modaly>
        <TouchableOpacity
          style={{
            borderColor: "#000",
            borderRadius: 3,
            borderWidth: 1,
            width: "100%",
            padding: 10,
            alignItems: 'center',
          }}
          onPress={()=>this.setState({isVisible: !this.state.isVisible})}
          >
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  }
});
