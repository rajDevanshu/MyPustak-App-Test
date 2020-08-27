import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Left, Body, Right, Title } from 'native-base';
import {View, Text, Alert} from 'react-native';
import Tabse from './tabs/tabOne';
import Tabss from './tabs/tabTwo';
import Tabsss from './tabs/tabThree';


export default class TabsScrollableExample extends Component {

  render() {

    return (
      <Container>
        <Header>
        <Left/>
            <Body>
                <Text style={{color: 'white', paddingLeft:55, fontWeight: 'bold', fontSize: 17}}>News Hour</Text>
            </Body>
            <Right/>
        </Header>

        <Tabs renderTabBar={()=> <ScrollableTab />}>

          <Tab heading="General">
            <Tabse />
          </Tab>

          <Tab heading="Business">
            <Tabss />
          </Tab>

          <Tab heading="Tech-Crunch">
            <Tabsss />
          </Tab>
          
        </Tabs>

      </Container>
    );

  }
}