import React, { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Container, Header, Left, Body, Title, Content, Right} from 'native-base'
import thunk from 'redux-thunk';
import DataList from './components/DataList.js';

import { ambilSemuaData } from './actions/index';

const store = createStore(allReducers, applyMiddleware(thunk));

store.dispatch(ambilSemuaData());

export default class App extends Component{
  render(){
    return(
      <Provider store= {store}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>
                hay
              </Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <DataList />
          </Content>
        </Container>
      </Provider>
    );
  }
}
