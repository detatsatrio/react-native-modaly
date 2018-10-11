import React, { Component } from 'react';
import {
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  View,
  AsyncStorage,
  WebView,
  Linking,
  ScrollView,
  Image,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { getAlert, getNotify } from './Notify';

export default class Modaly extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
      loadingBtn: false,
    };
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({ isVisible: this.props.isVisible });
    }
  }

  renderBody() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/*<ImageBackground
          style={{ width: 150, height: 100 }}
          source={require('../../assets/modalAsset/Phone.png')}
        />*/}

        <View style={{ margin: 15 }}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              textAlign: 'center',
              color: '#333333',
            }}
          >
            VALIDASI
          </Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            SMS
          </Text>

          <Text
            style={{
              color: '#707070',
              opacity: 0.7,
              marginTop: 20,
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            Kami akan mengirimkan sms validasi
          </Text>
          <Text
            style={{
              color: '#707070',
              opacity: 0.7,
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            ke nomor {this.props.nomer}
          </Text>
        </View>
      </View>
    );
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={() => this.sendSMS()}
        disabled={this.state.loadingBtn}
        style={{
          backgroundColor: '#333333',
          borderRadius: 5,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator
          color="white"
          style={{
            marginRight: 10,
            display: this.state.loadingBtn ? 'flex' : 'none',
          }}
        />
        <Text
          style={{
            fontFamily: 'D-DINCondensed',
            fontSize: 26,
            color: 'white',
            padding: 10,
            textAlign: 'center',
          }}
        >
          KIRIM
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Modal isVisible={this.state.isVisible}>
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ isVisible: !this.state.isVisible })}
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginBottom: -50,
              zIndex: 99,
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('./close.png')}
            />
          </TouchableOpacity>

          <View
            style={{ backgroundColor: 'white', borderRadius: 10, margin: 20 }}
          >
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
              }}
            >
              {this.props.children}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
