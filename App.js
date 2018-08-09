import React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { Black, Blue, Orange, Red, Slate, Teal, White } from './helpers/Colors.js'
import { __STYLES__ } from './helpers/Styles.js'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

// REDUX
import { Provider } from "react-redux";
import store from "./store/index";
import { setMode } from './actions/index.js'
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
  return {
    setMode: mode => dispatch(setMode(mode)),
  };
};

const mapStateToProps = state => {
  return { 
    mode: state.mode,
    ts: state.ts,
  };
};

const __DEV__ = false


class ConnectedApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        { key: 'analytics', title: 'ANALYTICS' },
        { key: 'profile', title: 'PROFILE' }
      ],
      index: 1,
    }

    this._renderAnalytics = this._renderAnalytics.bind(this)
    this._renderProfile = this._renderProfile.bind(this)
    this._renderBody = this._renderBody.bind(this)
  }

  _renderHeader(props) {
    return <TabBar {...props} />
  }

  _renderAnalytics() {
    return (
      <View style={[
          {backgroundColor: Orange(1)},
          styles.pane
        ]}>
        
      </View>
    )
  }

  _renderProfile() {
    return (
      <View style={{backgroundColor: Slate(0.8), flex: 1}}>

      </View>
    )
  }

  _renderBody() {

    return (
      <View style={[styles.body]}>
        <View style={styles.menuBar}>

        </View>
        <TabView
          renderTabBar={
            props =>
              <TabBar
                {...props}
                labelStyle={{

                }}
                style={[
                  { 
                    backgroundColor: Slate(1)
                  }, 
                  __STYLES__.shadowUp
                ]}
                tabStyle={{
                  backgroundColor: White(0.1)
                }}
                indicatorStyle={{ 
                  height: 60,
                  backgroundColor: Orange(1) 
                }}
                labelStyle={{
                  color: White(1),
                  fontSize: 20
                }}
              />
            }
          navigationState={this.state}
          renderScene={
            ({ route }) => {
              switch (route.key) {
                case 'analytics':
                  return (this._renderAnalytics());

                case 'profile':
                  return (this._renderProfile());

                default:
                  return null;
              }
            }
          }
      
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ 
            height: 100,
            width: Dimensions.get('window').width 
          }}
          
        />
        
      </View>
    )
  }

  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>

          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />

          <View style={styles.timeline}>
            
          </View>

          { this._renderBody() }
          
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  status: {
    height: 0,
    backgroundColor: Black(1)
  },
  header: {
    height: 0,
    backgroundColor: Orange(1),
    shadowOffset: {   
      width: 1,  
      height: 2
    },
    zIndex: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  body: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Slate(0),
    
  },
  menuBar: {
    width: 0,
    backgroundColor: White(0.1)
  },
  timeline: {
    maxHeight: 200,
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-around',
    backgroundColor: Slate(1),
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    paddingHorizontal: 10,

    flexDirection: 'column',
  },
  messageText: {
    color: Slate(1),
    fontSize: 20
  },
  pane: {
    flexDirection: 'column',
    flex: 1,
  },
  map: {
    flex: 3,
    zIndex: 0,
    justifyContent: 'flex-end',
  },
  footer: {
    minHeight: 80,
    flex: 0,
    backgroundColor: Slate(1),
  },
  box: {
    backgroundColor: White(0.3),
    height: 400,
  }
});

const ProvidedApp = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <ProvidedApp/>
      </Provider>
    )
  }
};


